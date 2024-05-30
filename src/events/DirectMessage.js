/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description DirectMessage implementation
 */

import { BaseEmoji } from "../types/index.js";

class DirectMessageUpdatedPrivateMessageExtraBody {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessageUpdatedPrivateMessageExtra {
    /** @type {"updated_private_message"} */
    type;

    /** @type {DirectMessageUpdatedPrivateMessageExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessageUpdatedPrivateMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessageDeletedPrivateMessageExtraBody {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessageDeletedPrivateMessageExtra {
    /** @type {"deleted_private_message"} */
    type;

    /** @type {DirectMessageDeletedPrivateMessageExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessageDeletedPrivateMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessagePrivateAddedReactionExtraBody {
    /** @type {String} */
    chat_code;

    /** @type {BaseEmoji} */
    emoji;

    /** @type {String} */
    user_id;

    /** @type {String} */
    msg_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessagePrivateAddedReactionExtra {
    /** @type {"private_added_reaction"} */
    type;

    /** @type {DirectMessagePrivateAddedReactionExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessagePrivateAddedReaction {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessagePrivateDeletedReactionExtraBody {
    /** @type {String} */
    chat_code;

    /** @type {BaseEmoji} */
    emoji;

    /** @type {String} */
    user_id;

    /** @type {String} */
    msg_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessagePrivateDeletedReactionExtra {
    /** @type {"private_deleted_reaction"} */
    type;

    /** @type {DirectMessagePrivateDeletedReactionExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class DirectMessagePrivateDeletedReaction {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export {
    DirectMessageUpdatedPrivateMessage,
    DirectMessageDeletedPrivateMessage,
    DirectMessagePrivateAddedReaction,
    DirectMessagePrivateDeletedReaction,
};
