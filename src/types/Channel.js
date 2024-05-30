/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Channel implementation
 */

import APIExecutor from "../api/index.js";
import { BaseUser } from "./User.js";

class BaseChannelPermissionOverwrite {
    #api;

    /** @type {Number} */
    role_id;

    /** @type {Number} */
    allow;

    /** @type {Number} */
    deny;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class BaseChannelPermissionUser {
    #api;

    /** @type {BaseUser} */
    user;

    /** @type {Number} */
    allow;

    /** @type {Number} */
    deny;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.user = new BaseUser(raw.user, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/objects#频道 Channel`
 */
class BaseChannel {
    #api;

    /** @type {String} */
    id;

    /** @type {String} */
    name;

    /** @type {String} */
    user_id;

    /** @type {String | undefined} */
    guild_id;

    /** @type {String | undefined} */
    topic;

    /** @type {Boolean} */
    is_category;

    /** @type {String} */
    parent_id;

    /** @type {Number} */
    level;

    /** @type {Number} */
    slow_mode;

    /** @type {String} */
    topic;

    /** @type {1 | 2} */
    type;

    /** @type {BaseChannelPermissionOverwrite[]} */
    permission_overwrites;

    /** @type {BaseChannelPermissionUser[]} */
    permission_users;

    /** @type {0 | 1} */
    permission_sync;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.permission_overwrites = raw.permission_overwrites.map(
            (p) => new BaseChannelPermissionOverwrite(p, api)
        );
        this.permission_users = raw.permission_users.map(
            (p) => new BaseChannelPermissionUser(p, api)
        );
    }
}

export { BaseChannel };
