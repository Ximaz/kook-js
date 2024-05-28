/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Message objects : https://developer.kookapp.cn/doc/event/message
 */

/* --- TEXT MESSAGE : https://developer.kookapp.cn/doc/event/message#文字消息 --- */

class TextMessageExtraAuthor {
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
    get username() {
        return this.#raw.username;
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
    get nickname() {
        return this.#raw.nickname;
    }

    /**
     * @return {Number[]}
     */
    get roles() {
        return this.#raw.roles;
    }
}

class TextMessageExtra {
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
    get guild_id() {
        return this.#raw.guild_id;
    }

    /**
     * @return {String}
     */
    get channel_name() {
        return this.#raw.channel_name;
    }

    /**
     * @return {String}
     */
    get code() {
        return this.#raw.code;
    }

    /**
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {Boolean}
     */
    get mention_all() {
        return this.#raw.mention_all;
    }

    /**
     * @return {Boolean}
     */
    get mention_here() {
        return this.#raw.mention_here;
    }

    /**
     * @return {Number[]}
     */
    get mention() {
        return this.#raw.mention;
    }

    /**
     * @return {Number[]}
     */
    get mention_roles() {
        return this.#raw.mention_roles;
    }

    /**
     * @return {TextMessageExtraAuthor}
     */
    get author() {
        return this.#raw.author;
    }
}

class TextMessage {
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

    /**
     * @return {TextMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- PICTURE MESSAGE : https://developer.kookapp.cn/doc/event/message#图片消息 --- */

class PictureMessageExtraAttachment {
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
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {String}
     */
    get url() {
        return this.#raw.url;
    }

    /**
     * @return {String}
     */
    get name() {
        return this.#raw.name;
    }
}

class PictureMessageExtraAuthor {
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
    get username() {
        return this.#raw.username;
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
    get nickname() {
        return this.#raw.nickname;
    }

    /**
     * @return {Number[]}
     */
    get roles() {
        return this.#raw.roles;
    }
}

class PictureMessageExtra {
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
    get guild_id() {
        return this.#raw.guild_id;
    }

    /**
     * @return {String}
     */
    get code() {
        return this.#raw.code;
    }

    /**
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {PictureMessageExtraAttachment}
     */
    get attachments() {
        return this.#raw.attachments;
    }

    /**
     * @return {PictureMessageExtraAuthor}
     */
    get author() {
        return this.#raw.author;
    }
}

class PictureMessage {
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

    /**
     * @return {PictureMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- VIDEO MESSAGE : https://developer.kookapp.cn/doc/event/message#视频消息 --- */

class VideoMessageExtraAttachment {
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
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {String}
     */
    get url() {
        return this.#raw.url;
    }

    /**
     * @return {String}
     */
    get name() {
        return this.#raw.name;
    }

    /**
     * @return {String}
     */
    get file_type() {
        return this.#raw.file_type;
    }

    /**
     * @return {Number}
     */
    get size() {
        return this.#raw.size;
    }

    /**
     * @return {Number}
     */
    get duration() {
        return this.#raw.duration;
    }

    /**
     * @return {Number}
     */
    get width() {
        return this.#raw.width;
    }

    /**
     * @return {Number}
     */
    get height() {
        return this.#raw.height;
    }
}

class VideoMessageExtraAuthor {
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
    get username() {
        return this.#raw.username;
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
    get nickname() {
        return this.#raw.nickname;
    }

    /**
     * @return {Number[]}
     */
    get roles() {
        return this.#raw.roles;
    }
}

class VideoMessageExtra {
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
    get guild_id() {
        return this.#raw.guild_id;
    }

    /**
     * @return {String}
     */
    get code() {
        return this.#raw.code;
    }

    /**
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {VideoMessageExtraAttachment}
     */
    get attachments() {
        return this.#raw.attachments;
    }

    /**
     * @return {VideoMessageExtraAuthor}
     */
    get author() {
        return this.#raw.author;
    }
}

class VideoMessage {
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

    /**
     * @return {VideoMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export { TextMessage, PictureMessage, VideoMessage };
