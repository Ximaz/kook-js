/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Quote implementation
 */

import { BaseUser } from "./User.js";

class BaseQuote {
    /** @type {String} */
    id;

    /** @type {Number} */
    type;

    /** @type {String} */
    content;

    /** @type {Number} */
    created_at;

    /** @type {BaseUser} */
    author;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { BaseQuote };
