/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Message implementation
 */

import { BaseUser } from "./User.js";
import {
    BaseImageAttachment,
    BaseVideoAttachment,
    BaseFileAttachment,
} from "./Attachment.js";
import { BaseKMarkdown } from "./KMarkdown.js";

class BaseTextMessageExtra {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseTextMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseImageMessageExtra {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseImageMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseVideoMessageExtra {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseVideoMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseFileMessageExtra {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseFileMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseKMarkdownMessageExtra {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseKMarkdownMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseCardMessageExtra {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseCardMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BasePropsMessageContentData {
    /** @type {String} */
    user_id;

    /** @type {String} */
    target_id;

    /** @type {Number} */
    item_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BasePropsMessageContent {
    /** @type {"string" | "item"} */
    type;

    /** @type {BasePropsMessageContentData} */
    data;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BasePropsMessageExtra {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BasePropsMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
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
};
