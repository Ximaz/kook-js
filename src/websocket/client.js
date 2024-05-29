/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook SDK Websocket implementation https://developer.kookapp.cn/doc/websocket
 */

import { EventEmitter } from "node:events";

import Websocket, { WEBSOCKET_EVENTS } from "./websocket.js";
import APIExecutor from "../api/index.js";

/**
 * @typedef {import("../events/index.js").KookEvents} KookEvents
 */

/* https://developer.kookapp.cn/doc/reference#API 版本管理 */
const API_VERSION = 3;

class KookClient extends EventEmitter {
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
                const eventName = isNaN(d.extra?.type) ? d.extra?.type : "message";
                this.emit(eventName, d);
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

    /**
     * Register an event listener for the given event.
     * @template {keyof KookEvents} K
     * @param {K} event
     * @param {KookEvents[K]} listener
     * @returns {this}
     */
    on(event, listener) {
        super.on(event, listener);
        return this;
    }

    /**
     * Register a one-time event listener for the given event.
     * @template {keyof KookEvents} K
     * @param {K} event
     * @param {KookEvents[K]} listener
     * @returns {this}
     */
    once(event, listener) {
        super.once(event, listener);
        return this;
    }

    /**
     * Emit the given event with the provided arguments.
     * @template {keyof KookEvents} K
     * @param {K} event
     * @param {...Parameters<KookEvents[K]>} args
     * @returns {Boolean}
     */
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
}

export { KookClient };