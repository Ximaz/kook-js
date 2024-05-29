/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Channel object : https://developer.kookapp.cn/doc/objects#频道 Channel
 */

/**
 * @typedef {Object} BaseChannelPermissionOverwrite
 * @property {Number} role_id
 * @property {Number} allow Bit-fields permissions representation
 * @property {Number} deny Bit-fields permissions representation
 *
 * @typedef {Object} BaseChannelPermissionUser
 * @property {import("./User.js").BaseUser} user
 * @property {Number} allow Bit-fields permissions representation
 * @property {Number} deny Bit-fields permissions representation
 *
 * @typedef {Object} BaseChannel
 * @property {String} id
 * @property {String} name
 * @property {String} user_id
 * @property {String} [guild_id]
 * @property {Boolean} is_category
 * @property {String} parent_id
 * @property {Number} level
 * @property {Number} slow_mode in seconds
 * @property {String} topic
 * @property {1 | 2} type
 * @property {BaseChannelPermissionOverwrite[]} permission_overwrites
 * @property {BaseChannelPermissionUser[]} permission_users
 * @property {0 | 1} permission_sync
 * @property {Number} [limit_amount]
 */

/**
 * @param {Object} raw
 * @returns {BaseChannel}
 */
export function channel(raw) {
    return raw;
}
