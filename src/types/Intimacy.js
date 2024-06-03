/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Intimacy implementation
 */

import APIExecutor from "../api/index.js";

class BaseIntimacyImg {
    #api;

    /** @type {String} */
    id;

    /** @type {String} */
    url;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class BaseIntimacy {
    #api;

    /** @type {String} */
    img_url;

    /** @type {String} */
    social_info;

    /** @type {Number} */
    last_modify;

    /** @type {Number} */
    last_read;

    /** @type {Number} */
    score;

    /** @type {BaseIntimacyImg[]} */
    img_list;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.roles = raw.roles.map((i) => new BaseIntimacyImg(i, api));
    }
}

export { BaseIntimacy };
