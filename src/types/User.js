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

class BaseUserLiveInfo {
    #api;

    /** @type {Boolean} */
    in_live;

    /** @type {Number} */
    audience_count;

    /** @type {String} */
    live_thumb;

    /** @type {Number} */
    live_start_time;

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

    /** @type {Boolean | undefined} */
    is_vip;

    /** @type {Boolean | undefined} */
    is_ai_reduce_noise;

    /** @type {Boolean | undefined} */
    is_personal_card_bg;

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

    /** @type {String | undefined} */
    banner;

    /** @type {Number | undefined} */
    invited_count;

    /** @type {String | undefined} */
    client_id;

    /** @type {String | undefined} */
    mobile_prefix;

    /** @type {String | undefined} */
    mobile;

    /** @type {BaseUserLiveInfo | undefined} */
    live_info;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        if (raw.tag_info)
            this.tag_info = new BaseUserTagInfo(raw.tag_info, api);
        if (raw.live_info)
            this.live_info = new BaseUserLiveInfo(raw.live_info, api);
    }
}

export { BaseUser };
