/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Guild implementation
 */

import APIExecutor from "../api/index.js";
import { BaseRole } from "./Role.js";
import { BaseChannel } from "./Channel.js";

/**
 * @link `https://developer.kookapp.cn/doc/objects#服务器 Guild`
 */
class BaseGuild {
    #api;

    /** @type {String} */
    id;

    /** @type {String} */
    name;

    /** @type {String | undefined} */
    topic;

    /** @type {String} */
    user_id;

    /** @type {String} */
    icon;

    /** @type {0 | 1 | 2 | 3} */
    notify_type;

    /** @type {String} */
    region;

    /** @type {Boolean} */
    enable_open;

    /** @type {String} */
    open_id;

    /** @type {String} */
    default_channel_id;

    /** @type {String} */
    welcome_channel_id;

    /** @type {BaseRole[] | undefined} */
    roles;

    /** @type {BaseChannel[] | undefined} */
    channels;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        if (undefined !== raw.roles)
            this.roles = raw.roles.map((r) => new BaseRole(r, api));
        if (undefined !== raw.channels)
            this.channels = raw.channels.map((c) => new BaseChannel(c, api));
    }
}

export { BaseGuild };
