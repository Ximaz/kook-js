/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Channel implementation
 */

import { BaseEmoji } from "../types/index.js";

class ChannelAddedReactionExtraBody {
    /** @type {String} */
    channel_id;

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

class ChannelAddedReactionExtra {
    /** @type {"added_reaction"} */
    type;

    /** @type {ChannelAddedReactionExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelAddedReaction {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedReactionExtraBody {
    /** @type {String} */
    channel_id;

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

class ChannelDeletedReactionExtra {
    /** @type {"deleted_reaction"} */
    type;

    /** @type {ChannelDeletedReactionExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedReaction {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUpdatedMessageExtraBody {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUpdatedMessageExtra {
    /** @type {"updated_message"} */
    type;

    /** @type {ChannelUpdatedMessageExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUpdatedMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedMessageExtraBody {
    /** @type {String} */
    channel_id;

    /** @type {String} */
    msg_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedMessageExtra {
    /** @type {"deleted_message"} */
    type;

    /** @type {ChannelDeletedMessageExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelAddedChannelExtra {
    /** @type {"added_channel"} */
    type;

    /** @type {import("../types/index.js").BaseChannel} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelAddedChannel {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUpdatedChannelExtra {
    /** @type {"updated_channel"} */
    type;

    /** @type {import("../types/index.js").BaseChannel} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUpdatedChannel {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedChannelExtraBody {
    /** @type {String} */
    id;

    /** @type {Number} */
    deleted_at;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedChannelExtra {
    /** @type {"deleted_channel"} */
    type;

    /** @type {ChannelDeletedChannelExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelDeletedChannel {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelPinnedMessageExtraBody {
    /** @type {String} */
    channel_id;

    /** @type {String} */
    operator_id;

    /** @type {String} */
    msg_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelPinnedMessageExtra {
    /** @type {"pinned_message"} */
    type;

    /** @type {ChannelPinnedMessageExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelPinnedMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUnpinnedMessageExtraBody {
    /** @type {String} */
    channel_id;

    /** @type {String} */
    operator_id;

    /** @type {String} */
    msg_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUnpinnedMessageExtra {
    /** @type {"unpinned_message"} */
    type;

    /** @type {ChannelUnpinnedMessageExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class ChannelUnpinnedMessage {
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

    constructor(raw) {
        Object.assign(this, raw);
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
