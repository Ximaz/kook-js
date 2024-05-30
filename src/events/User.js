/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description User implementation
 */

class UserJoinedChannelExtraBody {
    /** @type {String} */
    user_id;

    /** @type {String} */
    channel_id;

    /** @type {Number} */
    joined_at;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserJoinedChannelExtra {
    /** @type {"joined_channel"} */
    type;

    /** @type {UserJoinedChannelExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserJoinedChannel {
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

    /** @type {UserJoinedChannelExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserExitedChannelExtraBody {
    /** @type {String} */
    user_id;

    /** @type {String} */
    channel_id;

    /** @type {Number} */
    exited_at;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserExitedChannelExtra {
    /** @type {"exited_channel"} */
    type;

    /** @type {UserExitedChannelExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserExitedChannel {
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

    /** @type {UserExitedChannelExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserUpdatedExtraBody {
    /** @type {String} */
    user_id;

    /** @type {String} */
    username;

    /** @type {String} */
    avatar;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserUpdatedExtra {
    /** @type {"user_updated"} */
    type;

    /** @type {UserUpdatedExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserUpdated {
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

    /** @type {UserUpdatedExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserSelfJoinedGuildExtraBody {
    /** @type {String} */
    guild_id;

    /** @type {String} */
    state;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserSelfJoinedGuildExtra {
    /** @type {"self_joined_guild"} */
    type;

    /** @type {UserSelfJoinedGuildExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserSelfJoinedGuild {
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

    /** @type {UserSelfJoinedGuildExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserSelfExitedGuildExtraBody {
    /** @type {String} */
    guild_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserSelfExitedGuildExtra {
    /** @type {"self_exited_guild"} */
    type;

    /** @type {UserSelfExitedGuildExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserSelfExitedGuild {
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

    /** @type {UserSelfExitedGuildExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserMessageBtnClickExtraBody {
    /** @type {String} */
    value;

    /** @type {String} */
    msg_id;

    /** @type {String} */
    user_id;

    /** @type {String} */
    target_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserMessageBtnClickExtra {
    /** @type {"message_btn_click"} */
    type;

    /** @type {UserMessageBtnClickExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class UserMessageBtnClick {
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

    /** @type {UserMessageBtnClickExtra} */
    extra;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export {
    UserJoinedChannel,
    UserExitedChannel,
    UserUpdated,
    UserSelfJoinedGuild,
    UserSelfExitedGuild,
    UserMessageBtnClick,
};
