/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description GuildRole implementation
 */

import { BaseRole } from "../types/index.js";

class GuildAddedRoleExtra {
    /** @type {"added_role"} */
    type;

    /** @type {BaseRole} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildAddedRole {
    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {255} */
    type;

    /** @type {String} */
    target_id;

    /** @type {String} */
    author_id;

    /** @type {String} */
    content;

    /** @type {String} */
    msg_id;

    /** @type {Number} */
    msg_timestamp;

    /** @type {String} */
    nonce;

    /** @type {String} */
    verify_token;

    /** @type {GuildAddedRoleExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildDeletedRoleExtra {
    /** @type {"deleted_role"} */
    type;

    /** @type {BaseRole} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildDeletedRole {
    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {255} */
    type;

    /** @type {String} */
    target_id;

    /** @type {String} */
    author_id;

    /** @type {String} */
    content;

    /** @type {String} */
    msg_id;

    /** @type {Number} */
    msg_timestamp;

    /** @type {String} */
    nonce;

    /** @type {String} */
    verify_token;

    /** @type {GuildDeletedRoleExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildUpdatedRoleExtra {
    /** @type {"updated_role"} */
    type;

    /** @type {BaseRole} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildUpdatedRole {
    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {255} */
    type;

    /** @type {String} */
    target_id;

    /** @type {String} */
    author_id;

    /** @type {String} */
    content;

    /** @type {String} */
    msg_id;

    /** @type {Number} */
    msg_timestamp;

    /** @type {String} */
    nonce;

    /** @type {String} */
    verify_token;

    /** @type {GuildUpdatedRoleExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { GuildAddedRole, GuildDeletedRole, GuildUpdatedRole };
