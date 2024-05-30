/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Guild implementation
 */

class BaseGuild {
    /** @type {String} */
    id;

    /** @type {String} */
    name;

    /** @type {String} */
    user_id;

    /** @type {String} */
    icon;

    /** @type {0 | 1 | 2 | 3} */
    notify_type;

    /** @type {String} */
    region;

    /** @type {Boolean} */
    enable_open;

    /** @type {String} */
    open_id;

    /** @type {String} */
    default_channel_id;

    /** @type {String} */
    welcome_channel_id;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { BaseGuild };
