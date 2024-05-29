/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Quote object : https://developer.kookapp.cn/doc/objects#引用消息 Quote
 */

class QuoteAuthor {
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
    get id() {
        return this.#raw.id;
    }

    /**
     * @return {String}
     */
    get username() {
        return this.#raw.username;
    }

    /**
     * @return {String}
     */
    get identify_num() {
        return this.#raw.identify_num;
    }

    /**
     * @return {"Websocket" | "Webhook"}
     */
    get os() {
        return this.#raw.os;
    }

    /**
     * @return {String}
     */
    get avatar() {
        return this.#raw.avatar;
    }

    /**
     * @return {String}
     */
    get vip_avatar() {
        return this.#raw.vip_avatar;
    }

    /**
     * @return {String}
     */
    get nickname() {
        return this.#raw.nickname;
    }

    /**
     * @return {0 | 1 | 10}
     */
    get status() {
        return this.#raw.status;
    }

    /**
     * @return {Number}
     */
    get joined_at() {
        return this.#raw.joined_at;
    }

    /**
     * @return {Number}
     */
    get active_time() {
        return this.#raw.active_time;
    }

    /**
     * @return {Boolean}
     */
    get online() {
        return this.#raw.online;
    }

    /**
     * @return {Boolean}
     */
    get is_vip() {
        return this.#raw.is_vip;
    }

    /**
     * @return {Boolean}
     */
    get bot() {
        return this.#raw.bot;
    }

    /**
     * @return {Boolean}
     */
    get mobile_verified() {
        return this.#raw.mobile_verified;
    }

    /**
     * @return {Number[]}
     */
    get roles() {
        return this.#raw.roles;
    }
}

class Quote {
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
    get id() {
        return this.#raw.id;
    }

    /**
     * @return {String}
     */
    get content() {
        return this.#raw.content;
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
    get create_at() {
        return this.#raw.create_at;
    }

    /**
     * @return {QuoteAuthor}
     */
    get author() {
        return this.#raw.author;
    }
}

export { Quote };
