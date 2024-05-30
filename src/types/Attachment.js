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
 * @param {BaseImageAttachment} raw
 */
export function attachmentImage(raw) {
    return { ...raw };
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
 * @param {BaseVideoAttachment} raw
 */
export function attachmentVideo(raw) {
    return { ...raw };
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
 * @param {BaseFileAttachment} raw
 */
export function attachmentFile(raw) {
    return { ...raw };
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
 * @param {BaseAttachment} raw
 */
export function attachment(raw) {
    return { ...raw };
}
