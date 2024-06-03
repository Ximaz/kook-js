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

    /** @type {0 | 5000 | 10000 | 15000 | 30000 | 60000 | 120000 | 300000 | 600000 | 900000 | 1800000 | 3600000 | 7200000 | 21600000 | undefined} */
    slow_mode;

    /** @type {String} */
    topic;

    /** @type {1 | 2} */
    type;

    /** @type {"1" | "2" | "3" | undefined} */
    voice_quality;

    /** @type {String[] | undefined} */
    children;

    /** @type {String | undefined} */
    server_url;

    /** @type {Boolean | undefined} */
    has_password;

    /** @type {Boolean | undefined} */
    is_readonly;

    /** @type {Boolean | undefined} */
    is_private;

    /** @type {Boolean | undefined} */
    is_master;

    /** @type {Number | undefined} */
    server_type;

    /** @type {Number | undefined} */
    mode;

    /** @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | undefined} */
    limit_amount;

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

export { BaseChannel, BaseChannelPermissionOverwrite, BaseChannelPermissionUser };
