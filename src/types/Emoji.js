/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Emoji implementation
 */

import APIExecutor from "../api/index.js";

class BaseEmoji {
    #api;

    /** @type {String} */
    id;

    /** @type {String} */
    name;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

export { BaseEmoji };
