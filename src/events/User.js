/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook User events : https://developer.kookapp.cn/doc/event/user
 */

/**
 * @typedef {Object} UserJoinedChannelExtraBody
 * @property {String} user_id
 * @property {String} channel_id
 * @property {Number} joined_at
 *
 * @typedef {Object} UserJoinedChannelExtra
 * @property {"joined_channel"} type
 * @property {UserJoinedChannelExtraBody} body
 *
 * @typedef {Object} UserJoinedChannel
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {UserJoinedChannelExtra} extra
 */

/**
 * @typedef {Object} UserExitedChannelExtraBody
 * @property {String} user_id
 * @property {String} channel_id
 * @property {Number} exited_at
 *
 * @typedef {Object} UserExitedChannelExtra
 * @property {"exited_channel"} type
 * @property {UserExitedChannelExtraBody} body
 *
 * @typedef {Object} UserExitedChannel
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {UserExitedChannelExtra} extra
 */

/**
 * @typedef {Object} UserUpdatedExtraBody
 * @property {String} user_id
 * @property {String} username
 * @property {String} avatar
 *
 * @typedef {Object} UserUpdatedExtra
 * @property {"user_updated"} type
 * @property {UserUpdatedExtraBody} body
 *
 * @typedef {Object} UserUpdated
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {UserUpdatedExtra} extra
 */

/**
 * @typedef {Object} UserSelfJoinedGuildExtraBody
 * @property {String} guild_id
 * @property {String} state
 *
 * @typedef {Object} UserSelfJoinedGuildExtra
 * @property {"self_joined_guild"} type
 * @property {UserSelfJoinedGuildExtraBody} body
 *
 * @typedef {Object} UserSelfJoinedGuild
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {UserSelfJoinedGuildExtra} extra
 */

/**
 * @typedef {Object} UserSelfExitedGuildExtraBody
 * @property {String} guild_id
 *
 * @typedef {Object} UserSelfExitedGuildExtra
 * @property {"self_exited_guild"} type
 * @property {UserSelfExitedGuildExtraBody} body
 *
 * @typedef {Object} UserSelfExitedGuild
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {UserSelfExitedGuildExtra} extra
 */

/**
 * @typedef {Object} UserMessageBtnClickExtraBody
 * @property {String} value
 * @property {String} msg_id
 * @property {String} user_id
 * @property {String} target_id
 *
 * @typedef {Object} UserMessageBtnClickExtra
 * @property {"message_btn_click"} type
 * @property {UserMessageBtnClickExtraBody} body
 *
 * @typedef {Object} UserMessageBtnClick
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {UserMessageBtnClickExtra} extra
 */

export {};
