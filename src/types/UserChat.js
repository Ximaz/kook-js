/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description User Chat implementation
 */

import APIExecutor from "../api/index.js";

class BaseUserChatTargetInfo {
    #api;

    /** @type {String} */
    id;

    /** @type {String} */
    username;

    /** @type {Boolean} */
    online;

    /** @type {String} */
    avatar;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class BaseUserChat {
    #api;

    /** @type {String} */
    code;

    /** @type {Number} */
    last_read_time;

    /** @type {Number} */
    latest_msg_time;

    /** @type {Number} */
    unread_count;

    /** @type {Boolean | undefined} */
    is_friend;

    /** @type {Boolean | undefined} */
    is_blocked;

    /** @type {Boolean | undefined} */
    is_target_blocked;

    /** @type {BaseUserChatTargetInfo} */
    target_info;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.target_info = new BaseUserChatTargetInfo(raw.target_info, api);
    }
}

export { BaseUserChat };
