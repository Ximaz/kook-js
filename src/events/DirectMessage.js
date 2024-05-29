/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook DirectMessage events : https://developer.kookapp.cn/doc/event/direct-message
 */

/**
 * @typedef {Object} DirectMessageUpdatedPrivateMessageExtraBody
 * @property {String} author_id
 * @property {String} target_id
 * @property {String} msg_id
 * @property {String} content
 * @property {Number} updated_at
 * @property {String} chat_code
 *
 * @typedef {Object} DirectMessageUpdatedPrivateMessageExtra
 * @property {"updated_private_message"} type
 * @property {DirectMessageUpdatedPrivateMessageExtraBody} body
 *
 * @typedef {Object} DirectMessageUpdatedPrivateMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {DirectMessageUpdatedPrivateMessageExtra} extra
 */

/**
 * @typedef {Object} DirectMessageDeletedPrivateMessageExtraBody
 * @property {String} author_id
 * @property {String} target_id
 * @property {String} msg_id
 * @property {Number} deleted_at
 * @property {String} chat_code
 *
 * @typedef {Object} DirectMessageDeletedPrivateMessageExtra
 * @property {"deleted_private_message"} type
 * @property {DirectMessageDeletedPrivateMessageExtraBody} body
 *
 * @typedef {Object} DirectMessageDeletedPrivateMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {DirectMessageDeletedPrivateMessageExtra} extra
 */

/**
 * @typedef {Object} DirectMessagePrivateAddedReactionExtraBody
 * @property {String} chat_code
 * @property {import("../types/index.js").BaseEmoji} emoji
 * @property {String} user_id
 * @property {String} msg_id
 *
 * @typedef {Object} DirectMessagePrivateAddedReactionExtra
 * @property {"private_added_reaction"} type
 * @property {DirectMessagePrivateAddedReactionExtraBody} body
 *
 * @typedef {Object} DirectMessagePrivateAddedReaction
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {DirectMessagePrivateAddedReactionExtra} extra
 */

/**
 * @typedef {Object} DirectMessagePrivateDeletedReactionExtraBody
 * @property {String} chat_code
 * @property {import("../types/index.js").BaseEmoji} emoji
 * @property {String} user_id
 * @property {String} msg_id
 *
 * @typedef {Object} DirectMessagePrivateDeletedReactionExtra
 * @property {"private_deleted_reaction"} type
 * @property {DirectMessagePrivateDeletedReactionExtraBody} body
 *
 * @typedef {Object} DirectMessagePrivateDeletedReaction
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {DirectMessagePrivateDeletedReactionExtra} extra
 */

export {};
