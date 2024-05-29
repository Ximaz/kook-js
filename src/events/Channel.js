/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Channel events : https://developer.kookapp.cn/doc/event/channel
 */

/**
 * @typedef {Object} ChannelAddedReactionExtraBody
 * @property {String} channel_id
 * @property {import("../types/index.js").BaseEmoji} emoji
 * @property {String} user_id
 * @property {String} msg_id
 *
 * @typedef {Object} ChannelAddedReactionExtra
 * @property {"added_reaction"} type
 * @property {ChannelAddedReactionExtraBody} body
 *
 * @typedef {Object} ChannelAddedReaction
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelAddedReactionExtra} extra
 */

/**
 * @typedef {Object} ChannelDeletedReactionExtraBody
 * @property {String} channel_id
 * @property {import("../types/index.js").BaseEmoji} emoji
 * @property {String} user_id
 * @property {String} msg_id
 *
 * @typedef {Object} ChannelDeletedReactionExtra
 * @property {"deleted_reaction"} type
 * @property {ChannelDeletedReactionExtraBody} body
 *
 * @typedef {Object} ChannelDeletedReaction
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelDeletedReactionExtra} extra
 */

/**
 * @typedef {Object} ChannelUpdatedMessageExtraBody
 * @property {String} channel_id
 * @property {String} content
 * @property {String[]} mention
 * @property {Boolean} mention_all
 * @property {Boolean} mention_here
 * @property {Number[]} mention_roles
 * @property {Number} updated_at
 * @property {String} msg_id
 *
 * @typedef {Object} ChannelUpdatedMessageExtra
 * @property {"updated_message"} type
 * @property {ChannelUpdatedMessageExtraBody} body
 *
 * @typedef {Object} ChannelUpdatedMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelUpdatedMessageExtra} extra
 */

/**
 * @typedef {Object} ChannelDeletedMessageExtraBody
 * @property {String} channel_id
 * @property {String} msg_id
 *
 * @typedef {Object} ChannelDeletedMessageExtra
 * @property {"deleted_message"} type
 * @property {ChannelDeletedMessageExtraBody} body
 *
 * @typedef {Object} ChannelDeletedMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelDeletedMessageExtra} extra
 */

/**
 * @typedef {Object} ChannelAddedChannelExtra
 * @property {"added_channel"} type
 * @property {import("../types/index.js").BaseChannel} body
 *
 * @typedef {Object} ChannelAddedChannel
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelAddedChannelExtra} extra
 */

/**
 * @typedef {Object} ChannelUpdatedChannelExtra
 * @property {"updated_channel"} type
 * @property {import("../types/index.js").BaseChannel} body
 *
 * @typedef {Object} ChannelUpdatedChannel
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelUpdatedChannelExtra} extra
 */

/**
 * @typedef {Object} ChannelDeletedChannelExtraBody
 * @property {String} id
 * @property {Number} deleted_at
 *
 * @typedef {Object} ChannelDeletedChannelExtra
 * @property {"deleted_channel"} type
 * @property {ChannelDeletedChannelExtraBody} body
 *
 * @typedef {Object} ChannelDeletedChannel
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelDeletedChannelExtra} extra
 */

/**
 * @typedef {Object} ChannelPinnedMessageExtraBody
 * @property {String} channel_id
 * @property {String} operator_id
 * @property {String} msg_id
 *
 * @typedef {Object} ChannelPinnedMessageExtra
 * @property {"pinned_message"} type
 * @property {ChannelPinnedMessageExtraBody} body
 *
 * @typedef {Object} ChannelPinnedMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelPinnedMessageExtra} extra
 */

/**
 * @typedef {Object} ChannelUnpinnedMessageExtraBody
 * @property {String} channel_id
 * @property {String} operator_id
 * @property {String} msg_id
 *
 * @typedef {Object} ChannelUnpinnedMessageExtra
 * @property {"unpinned_message"} type
 * @property {ChannelUnpinnedMessageExtraBody} body
 *
 * @typedef {Object} ChannelUnpinnedMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {ChannelUnpinnedMessageExtra} extra
 */

export {};
