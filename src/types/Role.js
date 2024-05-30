/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Role implementation
 */

import APIExecutor from "../api/index.js";

/**
 * @link `https://developer.kookapp.cn/doc/objects#角色 Role`
 */
class BaseRole {
    #api;

    /** @type {Number} */
    role_id;

    /** @type {String} */
    name;

    /** @type {Number} */
    color;

    /** @type {Number} */
    position;

    /** @type {Number} */
    hoist;

    /** @type {0 | 1} */
    mentionable;

    /** @type {Number} */
    permissions;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

export { BaseRole };
