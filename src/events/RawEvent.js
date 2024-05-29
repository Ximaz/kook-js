/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook raw event
 */

class RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"GROUP" | "PERSON" | "BROADCAST"}
     */
    get channel_type() {
        return this.#raw.channel_type;
    }

    /**
     * @return {String}
     */
    get target_id() {
        return this.#raw.target_id;
    }

    /**
     * @return {String}
     */
    get author_id() {
        return this.#raw.author_id;
    }

    /**
     * @return {String}
     */
    get content() {
        return this.#raw.content;
    }

    /**
     * @return {String}
     */
    get msg_id() {
        return this.#raw.msg_id;
    }

    /**
     * @return {String}
     */
    get nonce() {
        return this.#raw.nonce;
    }

    /**
     * @return {String}
     */
    get verify_token() {
        return this.#raw.verify_token;
    }

    /**
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {Number}
     */
    get msg_timestamp() {
        return this.#raw.msg_timestamp;
    }
}

export { RawEvent };
