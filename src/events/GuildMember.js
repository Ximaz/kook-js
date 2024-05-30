/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description GuildMember implementation
 * @link `https://developer.kookapp.cn/doc/event/guild-member`
 */

import APIExecutor from "../api/index.js";

class GuildMemberJoinedGuildExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {Number} */
    joined_at;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class GuildMemberJoinedGuildExtra {
    #api;

    /** @type {"joined_guild"} */
    type;

    /** @type {GuildMemberJoinedGuildExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new GuildMemberJoinedGuildExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/guild-member#新成员加入服务器` */
class GuildMemberJoinedGuild {
    #api;

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

    /** @type {GuildMemberJoinedGuildExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildMemberJoinedGuildExtra(raw.extra, api);
    }
}

class GuildMemberExitedGuildExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {Number} */
    exited_at;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class GuildMemberExitedGuildExtra {
    #api;

    /** @type {"exited_guild"} */
    type;

    /** @type {GuildMemberExitedGuildExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new GuildMemberExitedGuildExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/guild-member#服务器成员退出` */
class GuildMemberExitedGuild {
    #api;

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

    /** @type {GuildMemberExitedGuildExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildMemberExitedGuildExtra(raw.extra, api);
    }
}

class GuildMemberUpdatedGuildMemberExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {String} */
    nickname;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class GuildMemberUpdatedGuildMemberExtra {
    #api;

    /** @type {"updated_guild_member"} */
    type;

    /** @type {GuildMemberUpdatedGuildMemberExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new GuildMemberUpdatedGuildMemberExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/guild-member#服务器成员信息更新` */
class GuildMemberUpdatedGuildMember {
    #api;

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

    /** @type {GuildMemberUpdatedGuildMemberExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildMemberUpdatedGuildMemberExtra(raw.extra, api);
    }
}

class GuildMemberGuildMemberOnlineExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {Number} */
    event_time;

    /** @type {String[]} */
    guilds;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class GuildMemberGuildMemberOnlineExtra {
    #api;

    /** @type {"guild_member_online"} */
    type;

    /** @type {GuildMemberGuildMemberOnlineExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new GuildMemberGuildMemberOnlineExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/guild-member#服务器成员上线` */
class GuildMemberGuildMemberOnline {
    #api;

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

    /** @type {GuildMemberGuildMemberOnlineExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildMemberGuildMemberOnlineExtra(raw.extra, api);
    }
}

class GuildMemberGuildMemberOfflineExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {Number} */
    event_time;

    /** @type {String[]} */
    guilds;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class GuildMemberGuildMemberOfflineExtra {
    #api;

    /** @type {"guild_member_offline"} */
    type;

    /** @type {GuildMemberGuildMemberOfflineExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new GuildMemberGuildMemberOfflineExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/guild-member#服务器成员下线` */
class GuildMemberGuildMemberOffline {
    #api;

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

    /** @type {GuildMemberGuildMemberOfflineExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildMemberGuildMemberOfflineExtra(raw.extra, api);
    }
}

export {
    GuildMemberJoinedGuild,
    GuildMemberExitedGuild,
    GuildMemberUpdatedGuildMember,
    GuildMemberGuildMemberOnline,
    GuildMemberGuildMemberOffline,
};
