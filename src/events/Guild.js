/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Guild events : https://developer.kookapp.cn/doc/event/guild
 */

/**
 * @typedef {Object} GuildUpdatedGuildExtra
 * @property {"updated_guild"} type
 * @property {import("../types/index.js").BaseGuild} body
 *
 * @typedef {Object} GuildUpdatedGuild
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildUpdatedGuildExtra} extra
 */

/**
 * @typedef {Object} GuildDeletedGuildExtra
 * @property {"deleted_guild"} type
 * @property {import("../types/index.js").BaseGuild} body
 *
 * @typedef {Object} GuildDeletedGuild
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildDeletedGuildExtra} extra
 */

/**
 * @typedef {Object} GuildAddedBlockListExtraBody
 * @property {String} operator_id
 * @property {String} remark
 * @property {String[]} user_id
 *
 * @typedef {Object} GuildAddedBlockListExtra
 * @property {"added_block_list"} type
 * @property {GuildAddedBlockListExtraBody} body
 *
 * @typedef {Object} GuildAddedBlockList
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildAddedBlockListExtra} extra
 */

/**
 * @typedef {Object} GuildDeletedBlockListExtraBody
 * @property {String} operator_id
 * @property {String[]} user_id
 *
 * @typedef {Object} GuildDeletedBlockListExtra
 * @property {"added_block_list"} type
 * @property {GuildDeletedBlockListExtraBody} body
 *
 * @typedef {Object} GuildDeletedBlockList
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildDeletedBlockListExtra} extra
 */

/**
 * @typedef {Object} GuildAddedEmojiExtra
 * @property {"added_emoji"} type
 * @property {import("../types/index.js").BaseEmoji} body
 *
 * @typedef {Object} GuildAddedEmoji
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildAddedEmojiExtra} extra
 */

/**
 * @typedef {Object} GuildRemovedEmojiExtra
 * @property {"removed_emoji"} type
 * @property {import("../types/index.js").BaseEmoji} body
 *
 * @typedef {Object} GuildRemovedEmoji
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildRemovedEmojiExtra} extra
 */

/**
 * @typedef {Object} GuildUpdatedEmojiExtra
 * @property {"updated_emoji"} type
 * @property {import("../types/index.js").BaseEmoji} body
 *
 * @typedef {Object} GuildUpdatedEmoji
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildUpdatedEmojiExtra} extra
 */

export { };
