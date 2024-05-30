/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Quote object : https://developer.kookapp.cn/doc/objects#引用消息 Quote
 */

/**
 * @typedef {Object} BaseQuote
 * @property {String} id
 * @property {Number} type
 * @property {String} content
 * @property {Number} created_at
 * @property {import("./User.js").BaseUser} author
 */

/**
 * @param {BaseQuote} raw
 */
export function quote(raw) {
    return { ...raw };
}
