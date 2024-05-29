/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook raw websocket implementation https://developer.kookapp.cn/doc/websocket#连接流程
 */

import { inflateSync } from "node:zlib";

import ws from "ws";

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

export { WEBSOCKET_EVENTS };

export default class {
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
