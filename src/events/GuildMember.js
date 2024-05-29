/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook GuildMember events : https://developer.kookapp.cn/doc/event/guild-member
 */

/**
 * @typedef {Object} GuildMemberJoinedGuildExtraBody
 * @property {String} user_id
 * @property {Number} joined_at
 *
 * @typedef {Object} GuildMemberJoinedGuildExtra
 * @property {"joined_guild"} type
 * @property {GuildMemberJoinedGuildExtraBody} body
 *
 * @typedef {Object} GuildMemberJoinedGuild
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildMemberJoinedGuildExtra} extra
 */

/**
 * @typedef {Object} GuildMemberExitedGuildExtraBody
 * @property {String} user_id
 * @property {Number} exited_at
 *
 * @typedef {Object} GuildMemberExitedGuildExtra
 * @property {"exited_guild"} type
 * @property {GuildMemberExitedGuildExtraBody} body
 *
 * @typedef {Object} GuildMemberExitedGuild
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildMemberExitedGuildExtra} extra
 */

/**
 * @typedef {Object} GuildMemberUpdatedGuildMemberExtraBody
 * @property {String} user_id
 * @property {String} nickname
 *
 * @typedef {Object} GuildMemberUpdatedGuildMemberExtra
 * @property {"updated_guild_member"} type
 * @property {GuildMemberUpdatedGuildMemberExtraBody} body
 *
 * @typedef {Object} GuildMemberUpdatedGuildMember
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildMemberUpdatedGuildMemberExtra} extra
 */

/**
 * @typedef {Object} GuildMemberGuildMemberOnlineExtraBody
 * @property {String} user_id
 * @property {Number} event_time
 * @property {String[]} guilds
 *
 * @typedef {Object} GuildMemberGuildMemberOnlineExtra
 * @property {"guild_member_online"} type
 * @property {GuildMemberGuildMemberOnlineExtraBody} body
 *
 * @typedef {Object} GuildMemberGuildMemberOnline
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildMemberGuildMemberOnlineExtra} extra
 */

/**
 * @typedef {Object} GuildMemberGuildMemberOfflineExtraBody
 * @property {String} user_id
 * @property {Number} event_time
 * @property {String[]} guilds
 *
 * @typedef {Object} GuildMemberGuildMemberOfflineExtra
 * @property {"updateguild_member_offlined_guild_member"} type
 * @property {GuildMemberGuildMemberOfflineExtraBody} body
 *
 * @typedef {Object} GuildMemberGuildMemberOffline
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildMemberGuildMemberOfflineExtra} extra
 */

export {};
