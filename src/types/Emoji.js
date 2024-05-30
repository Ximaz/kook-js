/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Emoji object
 */

/**
 * @typedef {Object} BaseEmoji
 * @property {String} id
 * @property {String} name
 */

/**
 * @param {BaseEmoji} raw
 */
export function emoji(raw) {
    return { ...raw };
}
