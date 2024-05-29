/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description KMarkdown objects : https://developer.kookapp.cn/doc/event/message
 * https://developer.kookapp.cn/doc/kmarkdown#KMarkdown 消息
 */

/**
 * @typedef {Object} BaseKMarkdownMentionPart
 * @property {String} id
 * @property {String} username
 * @property {String} full_name
 * @property {String} avatar
 *
 * @typedef {Object} BaseKMarkdown
 * @property {String} raw_content
 * @property {String[]} mention_part
 * @property {BaseKMarkdownMentionPart[]} mention_role_part
 * @property {any[]} [item_part]
 */

/**
 * @param {Object} raw
 * @returns {BaseKMarkdown}
 */
export function kmarkdown(raw) {
    return raw;
}
