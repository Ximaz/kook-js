/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Channel implementation
 * @link https://developer.kookapp.cn/doc/event/channel
 *
 */

import APIExecutor from "../api/index.js";
import { BaseEmoji, BaseChannel } from "../types/index.js";

class ChannelAddedReactionExtraBody {
    #api;

    /** @type {String} */
    channel_id;

    /** @type {BaseEmoji} */
    emoji;

    /** @type {String} */
    user_id;

    /** @type {String} */
    msg_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.emoji = new BaseEmoji(raw.emoji, api);
    }
}

class ChannelAddedReactionExtra {
    #api;

    /** @type {"added_reaction"} */
    type;

    /** @type {ChannelAddedReactionExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new ChannelAddedReactionExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#频道内用户添加 0reaction` */
class ChannelAddedReaction {
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

    /** @type {ChannelAddedReactionExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelAddedReactionExtra(raw.extra, api);
    }
}

class ChannelDeletedReactionExtraBody {
    #api;

    /** @type {String} */
    channel_id;

    /** @type {BaseEmoji} */
    emoji;

    /** @type {String} */
    user_id;

    /** @type {String} */
    msg_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.emoji = new BaseEmoji(raw.emoji, api);
    }
}

class ChannelDeletedReactionExtra {
    #api;

    /** @type {"deleted_reaction"} */
    type;

    /** @type {ChannelDeletedReactionExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new ChannelDeletedReactionExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#频道内用户取消 reaction` */
class ChannelDeletedReaction {
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

    /** @type {ChannelDeletedReactionExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelDeletedReactionExtra(raw.extra, api);
    }
}

class ChannelUpdatedMessageExtraBody {
    #api;

    /** @type {String} */
    channel_id;

    /** @type {String} */
    content;

    /** @type {String[]} */
    mention;

    /** @type {Boolean} */
    mention_all;

    /** @type {Boolean} */
    mention_here;

    /** @type {Number[]} */
    mention_roles;

    /** @type {Number} */
    updated_at;

    /** @type {String} */
    msg_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class ChannelUpdatedMessageExtra {
    #api;

    /** @type {"updated_message"} */
    type;

    /** @type {ChannelUpdatedMessageExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new ChannelUpdatedMessageExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#频道消息更新` */
class ChannelUpdatedMessage {
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

    /** @type {ChannelUpdatedMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelUpdatedMessageExtra(raw.extra, api);
    }
}

class ChannelDeletedMessageExtraBody {
    #api;

    /** @type {String} */
    channel_id;

    /** @type {String} */
    msg_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class ChannelDeletedMessageExtra {
    #api;

    /** @type {"deleted_message"} */
    type;

    /** @type {ChannelDeletedMessageExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new ChannelDeletedMessageExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#频道消息被删除` */
class ChannelDeletedMessage {
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

    /** @type {ChannelDeletedMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelDeletedMessageExtra(raw.extra, api);
    }
}

class ChannelAddedChannelExtra {
    #api;

    /** @type {"added_channel"} */
    type;

    /** @type {BaseChannel} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new BaseChannel(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#新增频道` */
class ChannelAddedChannel {
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

    /** @type {ChannelAddedChannelExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelAddedChannelExtra(raw.extra, api);
    }
}

class ChannelUpdatedChannelExtra {
    #api;

    /** @type {"updated_channel"} */
    type;

    /** @type {BaseChannel} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new BaseChannel(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#修改频道信息` */
class ChannelUpdatedChannel {
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

    /** @type {ChannelUpdatedChannelExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelUpdatedChannelExtra(raw.extra, api);
    }
}

class ChannelDeletedChannelExtraBody {
    #api;

    /** @type {String} */
    id;

    /** @type {Number} */
    deleted_at;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class ChannelDeletedChannelExtra {
    #api;

    /** @type {"deleted_channel"} */
    type;

    /** @type {ChannelDeletedChannelExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new ChannelDeletedChannelExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#删除频道` */
class ChannelDeletedChannel {
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

    /** @type {ChannelDeletedChannelExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelDeletedChannelExtra(raw.extra, api);
    }
}

class ChannelPinnedMessageExtraBody {
    #api;

    /** @type {String} */
    channel_id;

    /** @type {String} */
    operator_id;

    /** @type {String} */
    msg_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class ChannelPinnedMessageExtra {
    #api;

    /** @type {"pinned_message"} */
    type;

    /** @type {ChannelPinnedMessageExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new ChannelPinnedMessageExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#新的频道置顶消息` */
class ChannelPinnedMessage {
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

    /** @type {ChannelPinnedMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelPinnedMessageExtra(raw.extra, api);
    }
}

class ChannelUnpinnedMessageExtraBody {
    #api;

    /** @type {String} */
    channel_id;

    /** @type {String} */
    operator_id;

    /** @type {String} */
    msg_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class ChannelUnpinnedMessageExtra {
    #api;

    /** @type {"unpinned_message"} */
    type;

    /** @type {ChannelUnpinnedMessageExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new ChannelUnpinnedMessageExtraBody(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/channel#取消频道置顶消息` */
class ChannelUnpinnedMessage {
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

    /** @type {ChannelUnpinnedMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new ChannelUnpinnedMessageExtra(raw.extra, api);
    }
}

export {
    ChannelAddedReaction,
    ChannelDeletedReaction,
    ChannelUpdatedMessage,
    ChannelDeletedMessage,
    ChannelAddedChannel,
    ChannelUpdatedChannel,
    ChannelDeletedChannel,
    ChannelPinnedMessage,
    ChannelUnpinnedMessage,
};
