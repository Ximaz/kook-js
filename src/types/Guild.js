/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Guild object : https://developer.kookapp.cn/doc/objects#服务器 Guild
 */

/**
 * @typedef {Object} BaseGuild
 * @property {String} id
 * @property {String} name
 * @property {String} [topic]
 * @property {String} user_id
 * @property {String} icon
 * @property {0 | 1 | 2 | 3} notify_type
 * @property {String} region
 * @property {Boolean} enable_open
 * @property {String} open_id
 * @property {String} default_channel_id
 * @property {String} welcome_channel_id
 * @property {import("./Role.js").BaseRole[]} [roles]
 * @property {import("./Channel.js").BaseChannel[]} [channels]
 */

/**
 * @param {BaseGuild} raw
 */
export function guild(raw) {
    return { ...raw };
}
