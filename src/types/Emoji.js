/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Emoji implementation
 */

class BaseEmoji {
    /** @type {String} */
    id;

    /** @type {String} */
    name;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { BaseEmoji };
