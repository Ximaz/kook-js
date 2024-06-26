/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description User implementation
 * @link https://developer.kookapp.cn/doc/event/user
 */

import APIExecutor from "../api/index.js";

class UserJoinedChannelExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {String} */
    channel_id;

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

class UserJoinedChannelExtra {
    #api;

    /** @type {"joined_channel"} */
    type;

    /** @type {UserJoinedChannelExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new UserJoinedChannelExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/user#用户加入语音频道` */
class UserJoinedChannel {
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

    /** @type {UserJoinedChannelExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new UserJoinedChannelExtra(raw.extra, api);
    }
}

class UserExitedChannelExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {String} */
    channel_id;

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

class UserExitedChannelExtra {
    #api;

    /** @type {"exited_channel"} */
    type;

    /** @type {UserExitedChannelExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new UserExitedChannelExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/user#用户退出语音频道` */
class UserExitedChannel {
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

    /** @type {UserExitedChannelExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new UserExitedChannelExtra(raw.extra, api);
    }
}

class UserUpdatedExtraBody {
    #api;

    /** @type {String} */
    user_id;

    /** @type {String} */
    username;

    /** @type {String} */
    avatar;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class UserUpdatedExtra {
    #api;

    /** @type {"user_updated"} */
    type;

    /** @type {UserUpdatedExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new UserUpdatedExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/user#用户信息更新` */
class UserUpdated {
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

    /** @type {UserUpdatedExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new UserUpdatedExtra(raw.extra, api);
    }
}

class UserSelfJoinedGuildExtraBody {
    #api;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    state;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class UserSelfJoinedGuildExtra {
    #api;

    /** @type {"self_joined_guild"} */
    type;

    /** @type {UserSelfJoinedGuildExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new UserSelfJoinedGuildExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/user#自己新加入服务器` */
class UserSelfJoinedGuild {
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

    /** @type {UserSelfJoinedGuildExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new UserSelfJoinedGuildExtra(raw.extra, api);
    }
}

class UserSelfExitedGuildExtraBody {
    #api;

    /** @type {String} */
    guild_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class UserSelfExitedGuildExtra {
    #api;

    /** @type {"self_exited_guild"} */
    type;

    /** @type {UserSelfExitedGuildExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new UserSelfExitedGuildExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/user#自己退出服务器` */
class UserSelfExitedGuild {
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

    /** @type {UserSelfExitedGuildExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new UserSelfExitedGuildExtra(raw.extra, api);
    }
}

class UserMessageBtnClickExtraBody {
    #api;

    /** @type {String} */
    value;

    /** @type {String} */
    msg_id;

    /** @type {String} */
    user_id;

    /** @type {String} */
    target_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class UserMessageBtnClickExtra {
    #api;

    /** @type {"message_btn_click"} */
    type;

    /** @type {UserMessageBtnClickExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new UserMessageBtnClickExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/user#Card 消息中的 Button 点击事件` */
class UserMessageBtnClick {
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

    /** @type {UserMessageBtnClickExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new UserMessageBtnClickExtra(raw.extra, api);
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
