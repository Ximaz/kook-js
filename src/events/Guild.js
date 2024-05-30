/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Guild implementation
 */

import APIExecutor from "../api/index.js";
import { BaseEmoji, BaseGuild } from "../types/index.js";

class GuildUpdatedGuildExtra {
    #api;

    /** @type {"updated_guild"} */
    type;

    /** @type {BaseGuild} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new BaseGuild(raw.body, api);
    }
}

class GuildUpdatedGuild {
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

    /** @type {GuildUpdatedGuildExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildUpdatedGuildExtra(raw.extra, api);
    }
}

class GuildDeletedGuildExtra {
    #api;

    /** @type {"deleted_guild"} */
    type;

    /** @type {BaseGuild} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new BaseGuild(raw.body, api);
    }
}

class GuildDeletedGuild {
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

    /** @type {GuildDeletedGuildExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildDeletedGuildExtra(raw.extra, api);
    }
}

class GuildAddedBlockListExtraBody {
    #api;

    /** @type {String} */
    operator_id;

    /** @type {String} */
    remark;

    /** @type {String[]} */
    user_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class GuildAddedBlockListExtra {
    #api;

    /** @type {"added_block_list"} */
    type;

    /** @type {GuildAddedBlockListExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new GuildAddedBlockListExtraBody(raw.body, api);
    }
}

class GuildAddedBlockList {
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

    /** @type {GuildAddedBlockListExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildAddedBlockListExtra(raw.extra, api);
    }
}

class GuildDeletedBlockListExtraBody {
    #api;

    /** @type {String} */
    operator_id;

    /** @type {String[]} */
    user_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class GuildDeletedBlockListExtra {
    #api;

    /** @type {"added_block_list"} */
    type;

    /** @type {GuildDeletedBlockListExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new GuildDeletedBlockListExtraBody(raw.body, api);
    }
}

class GuildDeletedBlockList {
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

    /** @type {GuildDeletedBlockListExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildDeletedBlockListExtra(raw.extra, api);
    }
}

class GuildAddedEmojiExtra {
    #api;

    /** @type {"added_emoji"} */
    type;

    /** @type {BaseEmoji} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new BaseGuild(raw.body, api);
    }
}

class GuildAddedEmoji {
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

    /** @type {GuildAddedEmojiExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildAddedEmojiExtra(raw.extra, api);
    }
}

class GuildRemovedEmojiExtra {
    #api;

    /** @type {"removed_emoji"} */
    type;

    /** @type {BaseEmoji} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new BaseGuild(raw.body, api);
    }
}

class GuildRemovedEmoji {
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

    /** @type {GuildRemovedEmojiExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildRemovedEmojiExtra(raw.extra, api);
    }
}

class GuildUpdatedEmojiExtra {
    #api;

    /** @type {"updated_emoji"} */
    type;

    /** @type {BaseEmoji} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new BaseGuild(raw.body, api);
    }
}

class GuildUpdatedEmoji {
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

    /** @type {GuildUpdatedEmojiExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new GuildUpdatedEmojiExtra(raw.extra, api);
    }
}

export {
    GuildUpdatedGuild,
    GuildDeletedGuild,
    GuildAddedBlockList,
    GuildDeletedBlockList,
    GuildAddedEmoji,
    GuildRemovedEmoji,
    GuildUpdatedEmoji,
};
