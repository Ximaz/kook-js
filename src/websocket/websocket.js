/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook SDK Websocket implementation https://developer.kookapp.cn/doc/websocket
 */

import { EventEmitter } from "events";
import { inflate, inflateSync } from "node:zlib";

import APIExecutor from "../api/index.js";
import ws from "ws";

/* https://developer.kookapp.cn/doc/reference#API 版本管理 */
const API_VERSION = 3;

/* https://developer.kookapp.cn/doc/websocket#信令说明 */
const WEBSOCKET_EVENTS = {
    MESSAGE: 0,
    HANDSHAKE: 1,
    PING: 2,
    PONG: 3,
    RESUME_SESSION: 4,
    RECONNECT: 5,
    RESUME_ACK: 6,
};

/* https://developer.kookapp.cn/doc/websocket#信令[1] HELLO */
const WEBSOCKET_ERRORS = {
    40100: "Missing parameters.",
    40101: "Invalid token.",
    40102: "Token verification failed.",
    40103: "Token expires (Need to reconnect).",
};

class Websocket {
    #clock = 0;
    #sn = 0;
    #ws;

    /**
     * @param {String} url The websocket URL returned by the gateway endpoint.
     */
    constructor(url) {
        this.#ws = new ws(url);
    }

    stop() {
        clearInterval(this.#clock);
        this.#ws.close();
    }

    /* https://developer.kookapp.cn/doc/websocket#连接流程 */
    start() {
        const delays = [6000, 2000, 4000];
        let tries = 0;

        this.#clock = setInterval(
            this.#ws.send(
                JSON.stringify({ s: WEBSOCKET_EVENTS.PING, sn: this.#sn }),
                function (err) {
                    if (undefined === err) {
                        tries = 0;
                        return;
                    }
                    if (tries > 2) {
                        this.stop();
                        throw err;
                    }
                    ++tries;
                }.bind(this)
            ),
            delays[tries]
        );
    }

    /**
     * @param {any} packet The packet to parse
     * @returns {Promise<Object>} The inflated message
     */
    parsePacketResponse(packet) {
        return new Promise(function (resolve, reject) {
            inflate(packet, function (err, result) {
                if (null !== err) return reject(err);
                try {
                    const message = JSON.parse(result.toString("utf-8"));
                    if (undefined === message.d) return resolve(message);
                    if (Object.keys(WEBSOCKET_ERRORS).includes(message.d.code))
                        return reject(WEBSOCKET_ERRORS[message.d.code]);
                    return resolve(message);
                } catch (e) {
                    return reject(e);
                }
            });
        });
    }

    /**
     * @return {Number}
     */
    get sn() {
        return this.#sn;
    }
}

class KookWebsocket extends EventEmitter {
    #api;
    #session_id = null;
    /**
     * @type {Websocket}
     */
    #ws = null;

    /**
     * @param {String} token
     */
    constructor(token) {
        super();
        this.#api = new APIExecutor(API_VERSION, token);
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
        const { data } = this.#api.execute("GET", "/gateway/index", params);
        if (null === this.#ws) this.#ws = new Websocket(data.url);
        // TODO: handle messages via event listeners on this.#ws ('open', 'message', 'close')
        // Reference : https://github.com/Ximaz/kaiheila.js/blob/1ff6d432b7ee2cda68be31bf05056270c317d943/src/index.ts#L264
    }

    async disconnect() {
        if (null !== this.#ws)
            this.#ws.stop();
        this.emit("disconnect");
    }
}
