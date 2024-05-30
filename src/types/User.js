/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description User implementation
 */

import APIExecutor from "../api/index.js";

class BaseUserTagInfo {
    #api;

    /** @type {String} */
    color;

    /** @type {String} */
    text;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/objects#用户 User`
 */
class BaseUser {
    #api;

    /** @type {String} */
    id;

    /** @type {String} */
    username;

    /** @type {String | undefined} */
    nickname;

    /** @type {String} */
    identify_num;

    /** @type {Boolean} */
    online;

    /** @type {"Websocket" | "Webhook" | undefined} */
    os;

    /** @type {Boolean | undefined} */
    bot;

    /** @type {0 | 1 | 10} */
    status;

    /** @type {String} */
    avatar;

    /** @type {String | undefined} */
    vip_avatar;

    /** @type {Boolean} */
    mobile_verified;

    /** @type {Number[] | undefined} */
    roles;

    /** @type {BaseUserTagInfo | undefined} */
    tag_info;

    /** @type {Number | undefined} */
    joined_at;

    /** @type {Number | undefined} */
    active_time;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        if (raw.tag_info) this.tag_info = new BaseUserTagInfo(raw.tag_info, api);
    }
}

export { BaseUser };
