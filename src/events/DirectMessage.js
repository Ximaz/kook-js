/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description DirectMessage implementation
 * @link https://developer.kookapp.cn/doc/event/direct-message
 */

import APIExecutor from "../api/index.js";
import { BaseEmoji } from "../types/index.js";

class DirectMessageUpdatedPrivateMessageExtraBody {
    #api;

    /** @type {String} */
    author_id;

    /** @type {String} */
    target_id;

    /** @type {String} */
    msg_id;

    /** @type {String} */
    content;

    /** @type {Number} */
    updated_at;

    /** @type {String} */
    chat_code;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class DirectMessageUpdatedPrivateMessageExtra {
    #api;

    /** @type {"updated_private_message"} */
    type;

    /** @type {DirectMessageUpdatedPrivateMessageExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new DirectMessageUpdatedPrivateMessageExtraBody(
            raw.body,
            api
        );
    }
}

/** @link `https://developer.kookapp.cn/doc/event/direct-message#私聊消息更新` */
class DirectMessageUpdatedPrivateMessage {
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

    /** @type {DirectMessageUpdatedPrivateMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new DirectMessageUpdatedPrivateMessageExtra(
            raw.extra,
            api
        );
    }
}

class DirectMessageDeletedPrivateMessageExtraBody {
    #api;

    /** @type {String} */
    author_id;

    /** @type {String} */
    target_id;

    /** @type {String} */
    msg_id;

    /** @type {Number} */
    deleted_at;

    /** @type {String} */
    chat_code;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class DirectMessageDeletedPrivateMessageExtra {
    #api;

    /** @type {"deleted_private_message"} */
    type;

    /** @type {DirectMessageDeletedPrivateMessageExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new DirectMessageDeletedPrivateMessageExtraBody(
            raw.body,
            api
        );
    }
}

/** @link `https://developer.kookapp.cn/doc/event/direct-message#私聊消息被删除` */
class DirectMessageDeletedPrivateMessage {
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

    /** @type {DirectMessageDeletedPrivateMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new DirectMessageDeletedPrivateMessageExtra(
            raw.extra,
            api
        );
    }
}

class DirectMessagePrivateAddedReactionExtraBody {
    #api;

    /** @type {String} */
    chat_code;

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

class DirectMessagePrivateAddedReactionExtra {
    #api;

    /** @type {"private_added_reaction"} */
    type;

    /** @type {DirectMessagePrivateAddedReactionExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new DirectMessagePrivateAddedReactionExtraBody(
            raw.body,
            api
        );
    }
}

/** @link `https://developer.kookapp.cn/doc/event/direct-message#私聊内用户添加 reaction` */
class DirectMessagePrivateAddedReaction {
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

    /** @type {DirectMessagePrivateAddedReactionExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new DirectMessagePrivateAddedReactionExtra(raw.extra, api);
    }
}

class DirectMessagePrivateDeletedReactionExtraBody {
    #api;

    /** @type {String} */
    chat_code;

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

class DirectMessagePrivateDeletedReactionExtra {
    #api;

    /** @type {"private_deleted_reaction"} */
    type;

    /** @type {DirectMessagePrivateDeletedReactionExtraBody} */
    body;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.body = new DirectMessagePrivateDeletedReactionExtra(raw.body, api);
    }
}

/** @link `https://developer.kookapp.cn/doc/event/direct-message#私聊内用户取消 reaction` */
class DirectMessagePrivateDeletedReaction {
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

    /** @type {DirectMessagePrivateDeletedReactionExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new DirectMessagePrivateDeletedReactionExtra(
            raw.extra,
            api
        );
    }
}

export {
    DirectMessageUpdatedPrivateMessage,
    DirectMessageDeletedPrivateMessage,
    DirectMessagePrivateAddedReaction,
    DirectMessagePrivateDeletedReaction,
};
