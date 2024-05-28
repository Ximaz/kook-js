/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description User object : https://developer.kookapp.cn/doc/objects#用户 User
 */

class User {
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
     * @description
     * 0  - `normal`
     * 1  - `normal`
     * 10 - `banned`
     * @return {Number}
     */
    get status() {
        return this.#raw.status;
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

export { User };
