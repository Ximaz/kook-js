/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Channel object : https://developer.kookapp.cn/doc/objects#频道 Channel
 */

class ChannelPermissionOverwrite {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {Number}
     */
    get role_id() { return this.#raw.role_id; }

    /**
     * @return {Number}
     */
    get allow() { return this.#raw.allow; }

    /**
     * @return {Number}
     */
    get deny() { return this.#raw.deny; }
}

class ChannelPermissionUserUser {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {String}
     */
    get id() { return this.#raw.id; }

    /**
     * @return {String}
     */
    get username() { return this.#raw.username; }

    /**
     * @return {String}
     */
    get identify_num() { return this.#raw.identify_num; }

    /**
     * @return {String}
     */
    get os() { return this.#raw.os; }

    /**
     * @return {String}
     */
    get avatar() { return this.#raw.avatar; }

    /**
     * @return {String}
     */
    get nickname() { return this.#raw.nickname; }

    /**
     * @return {String}
     */
    get status() { return this.#raw.status; }

    /**
     * @return {String}
     */
    get joined_at() { return this.#raw.joined_at; }

    /**
     * @return {String}
     */
    get active_time() { return this.#raw.active_time; }

    /**
     * @return {Boolean}
     */
    get online() { return this.#raw.online; }

    /**
     * @return {Boolean}
     */
    get mobile_verified() { return this.#raw.mobile_verified; }

    /**
     * @return {Number[]}
     */
    get roles() { return this.#raw.roles; }
}

class ChannelPermissionUser {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelPermissionUserUser}
     */
    get user() { return this.#raw.user; }

    /**
     * @return {Number}
     */
    get allow() { return this.#raw.allow; }

    /**
     * @return {Number}
     */
    get deny() { return this.#raw.deny; }
}

class Channel {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {String}
     */
    get id() { return this.#raw.id; }

    /**
     * @return {String}
     */
    get name() { return this.#raw.name; }

    /**
     * @return {String}
     */
    get user_id() { return this.#raw.user_id; }

    /**
     * @return {String}
     */
    get guild_id() { return this.#raw.guild_id; }

    /**
     * @return {String}
     */
    get parent_id() { return this.#raw.parent_id; }

    /**
     * @return {String}
     */
    get topic() { return this.#raw.topic; }

    /**
     * @return {Number}
     */
    get level() { return this.#raw.level; }

    /**
     * @description
     * The delay in **seconds** allowed between each message sent for a user.
     * @return {Number}
     */
    get slow_mode() { return this.#raw.slow_mode; }

    /**
     * @description
     * 1 - `text` channel
     * 2 - `voice` channel
     * @return {Number}
     */
    get type() { return this.#raw.type; }

    /**
     * @description
     * 0 - permissions are not synchronized
     * 1 - permissions are synchronized
     * @return {Number}
     */
    get permission_sync() { return this.#raw.permission_sync; }

    /**
     * @return {Boolean}
     */
    get is_category() { return this.#raw.is_category; }

    /**
     * @return {ChannelPermissionOverwrite[]}
     */
    get permission_overwrites() { return this.#raw.permission_overwrites; }

    /**
     * @return {ChannelPermissionUser[]}
     */
    get permission_users() { return this.#raw.permission_users; }
}

export { Channel };
