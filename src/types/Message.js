/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Message implementation
 */

import { BaseUser } from "./User.js";
import {
    BaseAttachment,
    BaseImageAttachment,
    BaseVideoAttachment,
    BaseFileAttachment,
} from "./Attachment.js";
import { BaseKMarkdown } from "./KMarkdown.js";
import APIExecutor from "../api/index.js";

class BaseTextMessageExtra {
    #api;

    /** @type {1} */
    type;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    channel_name;

    /** @type {String[]} */
    mention;

    /** @type {Boolean} */
    mention_all;

    /** @type {Number[]} */
    mention_roles;

    /** @type {Boolean} */
    mention_here;

    /** @type {String} */
    code;

    /** @type {BaseUser} */
    author;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.author = new BaseUser(raw.author, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#文字消息`
 */
class BaseTextMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {1} */
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

    /** @type {BaseTextMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new BaseTextMessageExtra(raw.extra, api);
    }
}

class BaseImageMessageExtra {
    #api;

    /** @type {2} */
    type;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    code;

    /** @type {BaseUser} */
    author;

    /** @type {BaseImageAttachment} */
    attachments;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.author = new BaseUser(raw.author, api);
        this.attachments = new BaseImageAttachment(raw.attachments, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#图片消息`
 */
class BaseImageMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {2} */
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

    /** @type {BaseImageMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new BaseImageMessageExtra(raw.extra, api);
    }
}

class BaseVideoMessageExtra {
    #api;

    /** @type {3} */
    type;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    code;

    /** @type {BaseUser} */
    author;

    /** @type {BaseVideoAttachment} */
    attachments;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.author = new BaseUser(raw.author, api);
        this.attachments = new BaseVideoAttachment(raw.attachments, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#视频消息`
 */
class BaseVideoMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {3} */
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

    /** @type {BaseVideoMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new BaseVideoMessageExtra(raw.extra, api);
    }
}

class BaseFileMessageExtra {
    #api;

    /** @type {4} */
    type;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    code;

    /** @type {BaseUser} */
    author;

    /** @type {BaseFileAttachment} */
    attachments;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.author = new BaseUser(raw.author, api);
        this.attachments = new BaseFileAttachment(raw.attachments, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#文件消息`
 */
class BaseFileMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {4} */
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

    /** @type {BaseFileMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new BaseFileMessageExtra(raw.extra, api);
    }
}

class BaseKMarkdownMessageExtra {
    #api;

    /** @type {9} */
    type;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    channel_name;

    /** @type {String[]} */
    mention;

    /** @type {Boolean} */
    mention_all;

    /** @type {Number[]} */
    mention_roles;

    /** @type {Boolean} */
    mention_here;

    /** @type {any[]} */
    nav_channels;

    /** @type {String} */
    code;

    /** @type {BaseUser} */
    author;

    /** @type {BaseKMarkdown} */
    kmarkdown;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.author = new BaseUser(raw.author, api);
        this.kmarkdown = new BaseKMarkdown(raw.kmarkdown, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#KMarkdown 消息`
 */
class BaseKMarkdownMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {9} */
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

    /** @type {BaseKMarkdownMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new BaseKMarkdownMessageExtra(raw.extra, api);
    }
}

class BaseCardMessageExtra {
    #api;

    /** @type {10} */
    type;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    channel_name;

    /** @type {String[]} */
    mention;

    /** @type {Boolean} */
    mention_all;

    /** @type {Number[]} */
    mention_roles;

    /** @type {Boolean} */
    mention_here;

    /** @type {any[]} */
    nav_channels;

    /** @type {String} */
    code;

    /** @type {BaseUser} */
    author;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.author = new BaseUser(raw.author, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#Card 消息`
 */
class BaseCardMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {10} */
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

    /** @type {BaseCardMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.extra = new BaseCardMessageExtra(raw.extra, api);
    }
}

class BasePropsMessageContentData {
    #api;

    /** @type {String} */
    user_id;

    /** @type {String} */
    target_id;

    /** @type {Number} */
    item_id;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

class BasePropsMessageContent {
    #api;

    /** @type {"string" | "item"} */
    type;

    /** @type {BasePropsMessageContentData} */
    data;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.data = new BasePropsMessageContentData(raw.data, api);
    }
}

class BasePropsMessageExtra {
    #api;

    /** @type {12} */
    type;

    /** @type {String} */
    guild_id;

    /** @type {String} */
    channel_name;

    /** @type {String[]} */
    mention;

    /** @type {BaseUser} */
    author;

    /** @type {BaseKMarkdown} */
    kmarkdown;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.author = new BaseUser(raw.author, api);
        this.kmarkdown = new BaseKMarkdown(raw.kmarkdown, api);
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#道具 消息`
 */
class BasePropsMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {12} */
    type;

    /** @type {String} */
    target_id;

    /** @type {String} */
    author_id;

    /** @type {BasePropsMessageContent} */
    content;

    /** @type {String} */
    msg_id;

    /** @type {Number} */
    msg_timestamp;

    /** @type {String} */
    nonce;

    /** @type {String} */
    verify_token;

    /** @type {BasePropsMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.content = new BasePropsMessageContent(raw.content, api);
        this.extra = new BasePropsMessageExtra(raw.extra, api);
    }
}

class BaseMessageExtra {
    #api;

    /** @type {1 | 2 | 3 | 4 | 9 | 10 | 12} */
    type;

    /** @type {String | undefined} */
    guild_id;

    /** @type {String | undefined} */
    channel_name;

    /** @type {String[] | undefined} */
    mention;

    /** @type {Boolean | undefined} */
    mention_all;

    /** @type {Number[] | undefined} */
    mention_roles;

    /** @type {Boolean | undefined} */
    mention_here;

    /** @type {String | undefined} */
    code;

    /** @type {BaseUser} */
    author;

    /** @type {BaseAttachment | undefined} */
    attachments;

    /** @type {any[] | undefined} */
    nav_channels;

    /** @type {BaseKMarkdown | undefined} */
    kmarkdown;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        if (undefined !== raw.attachments)
            this.attachments = new BaseAttachment(raw.attachments, api);
        if (undefined !== raw.kmarkdown)
            this.kmarkdown = new BaseKMarkdown(raw.kmarkdown, api);
    }
}

class BaseMessage {
    #api;

    /** @type {"PERSON" | "GROUP" | "BROADCAST"} */
    channel_type;

    /** @type {12} */
    type;

    /** @type {String} */
    target_id;

    /** @type {String} */
    author_id;

    /** @type {String | BasePropsMessageContent} */
    content;

    /** @type {String} */
    msg_id;

    /** @type {Number} */
    msg_timestamp;

    /** @type {String} */
    nonce;

    /** @type {String} */
    verify_token;

    /** @type {BaseMessageExtra} */
    extra;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        if (typeof raw.content !== "string")
            this.content = new BasePropsMessageContent(raw.content, api);
        this.extra = new BaseMessageExtra(raw.extra, api);
    }
}

export {
    BaseTextMessage,
    BaseImageMessage,
    BaseVideoMessage,
    BaseFileMessage,
    BaseKMarkdownMessage,
    BaseCardMessage,
    BasePropsMessage,
    BaseMessage
};
