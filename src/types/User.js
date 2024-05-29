/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description User object : https://developer.kookapp.cn/doc/objects#用户 User
 */

/**
 * @typedef {Object} BaseUserTagInfo
 * @property {String} color
 * @property {String} text
 *
 * @typedef {Object} BaseUser
 * @property {String} id
 * @property {String} username
 * @property {String} identify_num
 * @property {Boolean} online
 * @property {"Websocket" | "Webhook"} [os]
 * @property {String} avatar
 * @property {String} [vip_avatar]
 * @property {Boolean} [is_vip]
 * @property {Boolean} [bot]
 * @property {0 | 1 | 10} status
 * @property {Boolean} mobile_verified
 * @property {String} [nickname]
 * @property {Number[]} [roles]
 * @property {Number} [joined_at]
 * @property {Number} [active_time]
 * @property {BaseUserTagInfo} [tag_info]
 */

/**
 * @param {Object} raw
 * @returns {BaseUser}
 */
export function user(raw) {
    return raw;
}
