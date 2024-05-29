/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Attachment object : https://developer.kookapp.cn/doc/objects#附加的多媒体数据 Attachments
 */

/**
 * @typedef {Object} BaseImageAttachment
 * @property {"image"} type
 * @property {String} name
 * @property {String} url
 */

/**
 * @param {Object} raw
 * @returns {BaseImageAttachment}
 */
export function attachmentImage(raw) {
    return raw;
}

/**
 * @typedef {Object} BaseVideoAttachment
 * @property {"video"} type
 * @property {String} name
 * @property {String} url
 * @property {String} file_type
 * @property {Number} size
 * @property {Number} duration
 * @property {Number} width
 * @property {Number} height
 */

/**
 * @param {Object} raw
 * @returns {BaseVideoAttachment}
 */
export function attachmentVideo(raw) {
    return raw;
}

/**
 * @typedef {Object} BaseFileAttachment
 * @property {"file"} type
 * @property {String} name
 * @property {String} url
 * @property {String} file_type
 * @property {Number} size
 */

/**
 * @param {Object} raw
 * @returns {BaseFileAttachment}
 */
export function attachmentFile(raw) {
    return raw;
}

/**
 * @typedef {Object} BaseAttachment
 * @property {"image" | "video" | "file"} type
 * @property {String} name
 * @property {String} url
 * @property {String} [file_type]
 * @property {Number} [size]
 * @property {Number} [duration]
 * @property {Number} [width]
 * @property {Number} [height]
 */

/**
 * @param {Object} raw
 * @returns {BaseAttachment}
 */
export function attachment(raw) {
    return raw;
}
