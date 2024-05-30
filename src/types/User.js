/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description User implementation
 */

class BaseUserTagInfo {
    /** @type {String} */
    color;

    /** @type {String} */
    text;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseUser {
    /** @type {String} */
    id;

    /** @type {String} */
    username;

    /** @type {String} */
    identify_num;

    /** @type {Boolean} */
    online;

    /** @type {String} */
    avatar;

    /** @type {0 | 1 | 10} */
    status;

    /** @type {Boolean} */
    mobile_verified;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { BaseUser };
