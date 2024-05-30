/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Attachment implementation
 */

class BaseImageAttachment {
    /** @type {"image"} */
    type;

    /** @type {String} */
    name;

    /** @type {String} */
    url;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseVideoAttachment {
    /** @type {"video"} */
    type;

    /** @type {String} */
    name;

    /** @type {String} */
    url;

    /** @type {String} */
    file_type;

    /** @type {Number} */
    size;

    /** @type {Number} */
    duration;

    /** @type {Number} */
    width;

    /** @type {Number} */
    height;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseFileAttachment {
    /** @type {"file"} */
    type;

    /** @type {String} */
    name;

    /** @type {String} */
    url;

    /** @type {String} */
    file_type;

    /** @type {Number} */
    size;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseAttachment {
    /** @type {"image" | "video" | "file"} */
    type;

    /** @type {String} */
    name;

    /** @type {String} */
    url;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export {
    BaseImageAttachment,
    BaseVideoAttachment,
    BaseFileAttachment,
    BaseAttachment,
};
