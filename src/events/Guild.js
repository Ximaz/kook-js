/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Guild implementation
 */

import { BaseEmoji, BaseGuild } from "../types/index.js";

class GuildUpdatedGuildExtra {
    /** @type {"updated_guild"} */
    type;

    /** @type {BaseGuild} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildUpdatedGuild {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildDeletedGuildExtra {
    /** @type {"deleted_guild"} */
    type;

    /** @type {BaseGuild} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildDeletedGuild {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildAddedBlockListExtraBody {
    /** @type {String} */
    operator_id;

    /** @type {String} */
    remark;

    /** @type {String[]} */
    user_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildAddedBlockListExtra {
    /** @type {"added_block_list"} */
    type;

    /** @type {GuildAddedBlockListExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildAddedBlockList {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildDeletedBlockListExtraBody {
    /** @type {String} */
    operator_id;

    /** @type {String[]} */
    user_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildDeletedBlockListExtra {
    /** @type {"added_block_list"} */
    type;

    /** @type {GuildDeletedBlockListExtraBody} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildDeletedBlockList {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildAddedEmojiExtra {
    /** @type {"added_emoji"} */
    type;

    /** @type {BaseEmoji} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildAddedEmoji {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildRemovedEmojiExtra {
    /** @type {"removed_emoji"} */
    type;

    /** @type {BaseEmoji} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildRemovedEmoji {
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

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildUpdatedEmojiExtra {
    /** @type {"updated_emoji"} */
    type;

    /** @type {BaseEmoji} */
    body;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class GuildUpdatedEmoji {
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

    constructor(raw) {
        Object.assign(this, raw);
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
