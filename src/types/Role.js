/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Role implementation
 */

class BaseRole {
    /** @type {Number} */
    role_id;

    /** @type {String} */
    name;

    /** @type {Number} */
    color;

    /** @type {Number} */
    position;

    /** @type {Number} */
    hoist;

    /** @type {0 | 1} */
    mentionable;

    /** @type {Number} */
    permissions;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { BaseRole };
