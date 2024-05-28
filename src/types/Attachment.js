/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Attachment object : https://developer.kookapp.cn/doc/objects#附加的多媒体数据 Attachments
 */

class Attachment {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {String}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {String}
     */
    get url() {
        return this.#raw.url;
    }

    /**
     * @return {String}
     */
    get name() {
        return this.#raw.name;
    }

    /**
     * @return {Number}
     */
    get size() {
        return this.#raw.size;
    }
}

export { Attachment };
