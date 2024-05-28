/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Role object : https://developer.kookapp.cn/doc/objects#角色 Role
 */

class Role {
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
    get name() {
        return this.#raw.name;
    }

    /**
     * @return {Number}
     */
    get role_id() {
        return this.#raw.role_id;
    }

    /**
     * @return {Number}
     */
    get color() {
        return this.#raw.color;
    }

    /**
     * @return {Number}
     */
    get position() {
        return this.#raw.position;
    }

    /**
     * @return {Number}
     */
    get hoist() {
        return this.#raw.hoist;
    }

    /**
     * @return {Number}
     */
    get mentionable() {
        return this.#raw.mentionable;
    }

    /**
     * @return {Number}
     */
    get permissions() {
        return this.#raw.permissions;
    }
}

export { Role };
