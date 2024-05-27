/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook API constants
 */
import { User, Attachement, VideoAttachement } from "./objects.js";

const CHANNEL_TYPE_TEXT = 1;

const CHANNEL_TYPE_VOICE = 2;

const CHANNEL_TYPE_GROUP = "GROUP";

class Message {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {String}
     */
    get channel_type() {
        return this.#raw.channel_type;
    }

    /**
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
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
     * @return {Number}
     */
    get msg_timestamp() {
        return this.#raw.msg_timestamp;
    }

    /**
     * @return {String}
     */
    get nonce() {
        return this.#raw.nonce;
    }
}

class MessageExtra {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {String}
     */
    get code() {
        return this.#raw.code;
    }

    /**
     * @return {String}
     */
    get guild_id() {
        return this.#raw.guild_id;
    }

    /**
     * @return {User}
     */
    get author() {
        return this.#raw.author;
    }
}

class TextMessageExtra extends MessageExtra {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {String}
     */
    get channel_name() {
        return this.#raw.channel_name;
    }

    /**
     * @return {Number[]}
     */
    get mention() {
        return this.#raw.mention;
    }

    /**
     * @return {Boolean}
     */
    get mention_all() {
        return this.#raw.mention_all;
    }

    /**
     * @return {Number[]}
     */
    get mention_roles() {
        return this.#raw.mention_roles;
    }

    /**
     * @return {Boolean}
     */
    get mention_here() {
        return this.#raw.mention_here;
    }
}

class TextMessage extends Message {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {TextMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

class PictureMessageExtra extends MessageExtra {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {Attachement}
     */
    get attachements() {
        return this.#raw.attachements;
    }
}

class PictureMessage extends Message {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {PictureMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

class VideoMessageExtra extends MessageExtra {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {VideoAttachement}
     */
    get attachements() {
        return this.#raw.attachements;
    }
}

class VideoMessage extends Message {
    #raw

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {VideoMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export { CHANNEL_TYPE_TEXT, CHANNEL_TYPE_VOICE, CHANNEL_TYPE_GROUP, TextMessage, PictureMessage, VideoMessage };
