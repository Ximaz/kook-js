/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Channel implementation
 */

import { BaseUser } from "./User.js";

class BaseChannelPermissionOverwrite {
    /** @type {Number} */
    role_id;

    /** @type {Number} */
    allow;

    /** @type {Number} */
    deny;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseChannelPermissionUser {
    /** @type {BaseUser} */
    user;

    /** @type {Number} */
    allow;

    /** @type {Number} */
    deny;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseChannel {
    /** @type {String} */
    id;

    /** @type {String} */
    name;

    /** @type {String} */
    user_id;

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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { BaseChannel };
