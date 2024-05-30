/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Quote implementation
 */

import APIExecutor from "../api/index.js";
import { BaseUser } from "./User.js";

/**
 * @link `https://developer.kookapp.cn/doc/objects#引用消息 Quote`
 */
class BaseQuote {
    #api;

    /** @type {String} */
    id;

    /** @type {Number} */
    type;

    /** @type {String} */
    content;

    /** @type {Number} */
    created_at;

    /** @type {BaseUser} */
    author;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

export { BaseQuote };
