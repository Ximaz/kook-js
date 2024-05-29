/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook SDK Websocket implementation https://developer.kookapp.cn/doc/websocket
 */

import { EventEmitter } from "node:events";
import { inflateSync } from "node:zlib";

import ws from "ws";

import APIExecutor from "../api/index.js";

/* https://developer.kookapp.cn/doc/reference#API 版本管理 */
const API_VERSION = 3;

/* https://developer.kookapp.cn/doc/websocket#信令说明 */
const WEBSOCKET_EVENTS = {
    EVENT: 0,
    HANDSHAKE: 1,
    PING: 2,
    PONG: 3,
    RESUME_SESSION: 4,
    RECONNECT: 5,
    RESUME_ACK: 6,
};

/* https://developer.kookapp.cn/doc/websocket#信令[1] HELLO */
const WEBSOCKET_ERRORS = {
    40100: new Error("Missing parameters."),
    40101: new Error("Invalid token."),
    40102: new Error("Token verification failed."),
    40103: new Error("Token expires (Need to reconnect)."),
};

/* https://developer.kookapp.cn/doc/websocket#连接流程 */
class Websocket {
    #ws;
    #sn = 0;
    #resumeClock = null;
    #heartbeatClock = null;

    /**
     * @param {String} url The websocket URL returned by the gateway endpoint.
     */
    constructor(url) {
        this.#ws = new ws(url);
    }

    /**
     * @param {String} message
     * @param {Number[]} delays
     */
    #initClock(message, delays) {
        let tries = 0;
        const allowed_tries = delays.length - 1;
        const clock = setInterval(
            function (self) {
                self.#ws.send(message, function (err) {
                    if (undefined === err) {
                        tries = 0;
                        clearInterval(clock);
                        return;
                    }
                    if (tries > allowed_tries) {
                        clearInterval(clock);
                        self.#ws.close();
                        throw err;
                    }
                    ++tries;
                });
            },
            delays[tries],
            this
        );

        return clock;
    }

    resume() {
        if (null !== this.#resumeClock)
            clearInterval(this.#resumeClock);
        const message = JSON.stringify({
            s: WEBSOCKET_EVENTS.RESUME_SESSION,
            sn: this.#sn,
        });
        const delays = [25000, 8000, 16000];
        this.#resumeClock = this.#initClock(message, delays);
    }

    heartbeat() {
        if (null !== this.#heartbeatClock)
            clearInterval(this.#heartbeatClock);
        const message = JSON.stringify({
            s: WEBSOCKET_EVENTS.PING,
            sn: this.#sn,
        });
        const delays = [6000, 2000, 4000];
        this.#heartbeatClock = this.#initClock(message, delays);
    }

    disconnect() {
        this.#ws.close();
        this.#sn = 0;
        clearInterval(this.#heartbeatClock);
        clearInterval(this.#resumeClock);
    }

    /**
     * @param {String} name The event name
     * @param {CallableFunction} listener The event listener
     */
    setHandler(name, listener) {
        this.#ws.on(name, listener);
    }

    /**
     * @typedef {Object} RawEvent
     * @property {Number} s The message kind (WEBSOCKET_EVENTS)
     * @property {Object | undefined} d The message details
     * @property {Number | undefined} sn The message counter
     *
     * @param {[Buffer, Boolean]} packet The raw packet to parse
     * @returns {Promise<RawEvent>} The inflated message
     */
    parsePacketResponse(packet) {
        try {
            const data = inflateSync(packet[0]);
            try {
                const message = JSON.parse(data.toString("utf-8"));
                if (undefined === message.d) return message;
                if (Object.keys(WEBSOCKET_ERRORS).includes(message.d.code))
                    throw WEBSOCKET_ERRORS[message.d.code];
                this.#sn = message.sn;
                return message;
            } catch (err) {
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * @return {Number}
     */
    get sn() {
        return this.#sn;
    }
}

class KookWebsocket extends EventEmitter {
    /** @type {APIExecutor} */
    #api;

    /** @type {Websocket} */
    #ws = null;

    /** @type {String} */
    #session_id = null;

    /** @type {Boolean} */
    #reconnect = false;

    /**
     * @param {String} token
     */
    constructor(token) {
        super();
        this.#api = new APIExecutor(API_VERSION, token);
    }

    #onOpen() {
        if (null !== this.#ws) this.#ws.heartbeat();
    }

    /**
     * @param {RawEvent} packet The received event packet
     */
    async #onMessage(packet) {
        if (null === this.#ws) return;
        const { s, d } = await this.#ws.parsePacketResponse(packet);

        this.emit("debug", { s, d });
        switch (s) {
            case WEBSOCKET_EVENTS.EVENT:
                this.emit("UNKNOWNED_YET");
                break;
            case WEBSOCKET_EVENTS.HANDSHAKE:
                const { sessionId, session_id } = d;
                this.#session_id = sessionId || session_id;
                this.emit("ready");
                break;
            case WEBSOCKET_EVENTS.PONG:
                this.#ws.heartbeat();
                break;
            case WEBSOCKET_EVENTS.RESUME_SESSION:
                this.#ws.resume();
                break;
            case WEBSOCKET_EVENTS.RECONNECT:
                this.#ws.disconnect();
                this.#session_id = "";
                this.#reconnect = true;
                break;
            case WEBSOCKET_EVENTS.RESUME_ACK:
                break;
            /* This should never happen unless Kookapp adds new events. */
            default:
                throw new Error(`Unhandled event: ${s}`);
        }
    }

    async #onClose() {
        if (true === this.#reconnect) {
            this.#reconnect = false;
            await this.login();
        } else await this.disconnect();
    }

    async login() {
        const params = {
            compress: 1,
        };
        if (null !== this.#session_id) {
            params.resume = 1;
            params.session_id = this.#session_id;
            if (null !== this.#ws) params.sn = this.#ws.sn;
            else params.sn = 0;
        }
        const { data } = await this.#api.execute("GET", "/gateway/index", {
            params,
        });
        if (null === this.#ws) this.#ws = new Websocket(data.data.url);
        this.#ws.setHandler("open", (...args) => this.#onOpen(args));
        this.#ws.setHandler("message", (...args) => this.#onMessage(args));
        this.#ws.setHandler("close", (...args) => this.#onClose(args));
    }

    async disconnect() {
        if (null !== this.#ws) this.#ws.stop();
        this.emit("disconnect");
    }
}

export { KookWebsocket };
