/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Attachment implementation
 */

import APIExecutor from "../api/index.js";

class BaseImageAttachment {
    #api;

    /** @type {"image"} */
    type;

    /** @type {String} */
    name;

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

class BaseVideoAttachment {
    #api;

    /** @type {"video"} */
    type;

    /** @type {String} */
    name;

    /** @type {String} */
    url;

    /** @type {String} */
    file_type;

    /** @type {Number} */
    size;

    /** @type {Number} */
    duration;

    /** @type {Number} */
    width;

    /** @type {Number} */
    height;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class BaseFileAttachment {
    #api;

    /** @type {"file"} */
    type;

    /** @type {String} */
    name;

    /** @type {String} */
    url;

    /** @type {String} */
    file_type;

    /** @type {Number} */
    size;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class BaseAttachment {
    #api;

    /** @type {"image" | "video" | "file"} */
    type;

    /** @type {String} */
    name;

    /** @type {String} */
    url;

    /** @type {String | undefined} */
    file_type;

    /** @type {Number | undefined} */
    size;

    /** @type {Number | undefined} */
    duration;

    /** @type {Number | undefined} */
    width;

    /** @type {Number | undefined} */
    height;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

export {
    BaseImageAttachment,
    BaseVideoAttachment,
    BaseFileAttachment,
    BaseAttachment,
};
