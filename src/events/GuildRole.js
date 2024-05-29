/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook GuildRole events : https://developer.kookapp.cn/doc/event/guild-role
 */

/**
 * @typedef {Object} GuildAddedRoleExtra
 * @property {"added_role"} type
 * @property {import("../types/index.js").BaseRole} body
 *
 * @typedef {Object} GuildAddedRole
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildAddedRoleExtra} extra
 */

/**
 * @typedef {Object} GuildDeletedRoleExtra
 * @property {"deleted_role"} type
 * @property {import("../types/index.js").BaseRole} body
 *
 * @typedef {Object} GuildDeletedRole
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildDeletedRoleExtra} extra
 */

/**
 * @typedef {Object} GuildUpdatedRoleExtra
 * @property {"updated_role"} type
 * @property {import("../types/index.js").BaseRole} body
 *
 * @typedef {Object} GuildUpdatedRole
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {255} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {GuildUpdatedRoleExtra} extra
 */

export {};
