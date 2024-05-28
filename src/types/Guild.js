/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Guild object : https://developer.kookapp.cn/doc/objects#服务器 Guild
 */


class GuildRole {
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
    get name() { return this.#raw.name; }

    /**
     * @return {Number}
     */
    get role_id() { return this.#raw.role_id; }

    /**
     * @return {Number}
     */
    get color() { return this.#raw.color; }

    /**
     * @return {Number}
     */
    get position() { return this.#raw.position; }

    /**
     * @return {Number}
     */
    get hoist() { return this.#raw.hoist; }

    /**
     * @return {Number}
     */
    get mentionable() { return this.#raw.mentionable; }

    /**
     * @return {Number}
     */
    get permissions() { return this.#raw.permissions; }
}

class GuildChannel {
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
    get user_id() { return this.#raw.user_id; }

    /**
     * @return {String}
     */
    get parent_id() { return this.#raw.parent_id; }

    /**
     * @return {String}
     */
    get name() { return this.#raw.name; }

    /**
     * @return {Number}
     */
    get type() { return this.#raw.type; }

    /**
     * @return {Number}
     */
    get level() { return this.#raw.level; }

    /**
     * @return {Number}
     */
    get limit_amount() { return this.#raw.limit_amount; }

    /**
     * @return {Boolean}
     */
    get is_category() { return this.#raw.is_category; }
}

class Guild {
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
    get topic() { return this.#raw.topic; }

    /**
     * @return {String}
     */
    get user_id() { return this.#raw.user_id; }

    /**
     * @return {String}
     */
    get icon() { return this.#raw.icon; }

    /**
     * @return {String}
     */
    get region() { return this.#raw.region; }

    /**
     * @return {String}
     */
    get open_id() { return this.#raw.open_id; }

    /**
     * @return {String}
     */
    get default_channel_id() { return this.#raw.default_channel_id; }

    /**
     * @return {String}
     */
    get welcome_channel_id() { return this.#raw.welcome_channel_id; }

    /**
     * @description
     * 0 - Guild's default's notifications settings
     * 1 - All notifications
     * 2 - Only `@mention`
     * 3 - No notification at all
     * @return {Number}
     */
    get notify_type() { return this.#raw.notify_type; }

    /**
     * @return {Boolean}
     */
    get enable_open() { return this.#raw.enable_open; }

    /**
     * @return {GuildRole[]}
     */
    get roles() { return this.#raw.roles };

    /**
     * @return {GuildChannel[]}
     */
    get channels() { return this.#raw.channels };
}

export { Guild };
