/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description GuildMember implementation
 */

class GuildMemberJoinedGuildExtraBody {
    /** @type {String} */
    user_id;

    /** @type {Number} */
    joined_at;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberJoinedGuildExtra {
    /** @type {"joined_guild"} */
    type;

    /** @type {GuildMemberJoinedGuildExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberJoinedGuild {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberExitedGuildExtraBody {
    /** @type {String} */
    user_id;

    /** @type {Number} */
    exited_at;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberExitedGuildExtra {
    /** @type {"exited_guild"} */
    type;

    /** @type {GuildMemberExitedGuildExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberExitedGuild {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberUpdatedGuildMemberExtraBody {
    /** @type {String} */
    user_id;

    /** @type {String} */
    nickname;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberUpdatedGuildMemberExtra {
    /** @type {"updated_guild_member"} */
    type;

    /** @type {GuildMemberUpdatedGuildMemberExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberUpdatedGuildMember {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberGuildMemberOnlineExtraBody {
    /** @type {String} */
    user_id;

    /** @type {Number} */
    event_time;

    /** @type {String[]} */
    guilds;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberGuildMemberOnlineExtra {
    /** @type {"guild_member_online"} */
    type;

    /** @type {GuildMemberGuildMemberOnlineExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberGuildMemberOnline {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberGuildMemberOfflineExtraBody {
    /** @type {String} */
    user_id;

    /** @type {Number} */
    event_time;

    /** @type {String[]} */
    guilds;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberGuildMemberOfflineExtra {
    /** @type {"guild_member_offline"} */
    type;

    /** @type {GuildMemberGuildMemberOfflineExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildMemberGuildMemberOffline {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export {
    GuildMemberJoinedGuild,
    GuildMemberExitedGuild,
    GuildMemberUpdatedGuildMember,
    GuildMemberGuildMemberOnline,
    GuildMemberGuildMemberOffline,
};
