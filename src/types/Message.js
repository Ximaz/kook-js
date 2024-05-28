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
     * @return {String[]}
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

/* --- FILE MESSAGE : https://developer.kookapp.cn/doc/event/message#文件消息 --- */

class FileMessageExtraAttachment {
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
}

class FileMessageExtraAuthor {
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

class FileMessageExtra {
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
     * @return {FileMessageExtraAttachment}
     */
    get attachments() {
        return this.#raw.attachments;
    }

    /**
     * @return {FileMessageExtraAuthor}
     */
    get author() {
        return this.#raw.author;
    }
}

class FileMessage {
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
     * @return {FileMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- KMARKDOWN MESSAGE : https://developer.kookapp.cn/doc/event/message#KMarkdown 消息 --- */

class KMarkdownMessageExtraAuthorTagInfo {
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
    get color() {
        return this.#raw.color;
    }

    /**
     * @return {String}
     */
    get text() {
        return this.#raw.text;
    }
}

class KMarkdownMessageExtraAuthor {
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
     * @return {String}
     */
    get os() {
        return this.#raw.os;
    }

    /**
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
     * @return {Number[]}
     */
    get roles() {
        return this.#raw.roles;
    }

    /**
     * @return {KMarkdownMessageExtraAuthorTagInfo}
     */
    get tag_info() {
        return this.#raw.tag_info;
    }
}

class KMarkdownMessageExtraKMarkdownMentionPart {
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
    get full_name() {
        return this.#raw.full_name;
    }

    /**
     * @return {String}
     */
    get avatar() {
        return this.#raw.avatar;
    }
}

class KMarkdownMessageExtraKMarkdown {
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
    get raw_content() {
        return this.#raw.raw_content;
    }

    /**
     * @return {KMarkdownMessageExtraKMarkdownMentionPart[]}
     */
    get mention_part() {
        return this.#raw.mention_part;
    }

    /**
     * @return {Number[]}
     */
    get mention_role_part() {
        return this.#raw.mention_role_part;
    }
}

class KMarkdownMessageExtra {
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
     * @return {String[]}
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
     * @return {any[]}
     */
    get nav_channels() {
        return this.#raw.nav_channels;
    }

    /**
     * @return {KMarkdownMessageExtraAuthor}
     */
    get author() {
        return this.#raw.author;
    }

    /**
     * @return {KMarkdownMessageExtraKMarkdown}
     */
    get kmarkdown() {
        return this.#raw.kmarkdown;
    }
}

class KMarkdownMessage {
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
    get verify_token() {
        return this.#raw.verify_token;
    }

    /**
     * @return {String}
     */
    get nonce() {
        return this.#raw.nonce;
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
     * @return {KMarkdownMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- CARD MESSAGE : https://developer.kookapp.cn/doc/event/message#Card 消息 --- */
/* --- TODO: https://developer.kookapp.cn/doc/cardmessage */

class CardMessageExtraAuthorTagInfo {
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
    get color() {
        return this.#raw.color;
    }

    /**
     * @return {String}
     */
    get text() {
        return this.#raw.text;
    }
}

class CardMessageExtraAuthor {
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
     * @return {String}
     */
    get os() {
        return this.#raw.os;
    }

    /**
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
     * @return {Number[]}
     */
    get roles() {
        return this.#raw.roles;
    }

    /**
     * @return {CardMessageExtraAuthorTagInfo}
     */
    get tag_info() {
        return this.#raw.tag_info;
    }
}

class CardMessageExtraKMarkdownMentionPart {
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
    get full_name() {
        return this.#raw.full_name;
    }

    /**
     * @return {String}
     */
    get avatar() {
        return this.#raw.avatar;
    }
}

class CardMessageExtraKMarkdown {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {any[]}
     */
    get item_part() {
        return this.#raw.item_part;
    }

    /**
     * @return {Number[]}
     */
    get mention_part() {
        return this.#raw.mention_part;
    }

    /**
     * @return {CardMessageExtraKMarkdownMentionPart[]}
     */
    get mention_role_part() {
        return this.#raw.mention_role_part;
    }
}

class CardMessageExtra {
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
     * @return {String[]}
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
     * @return {any[]}
     */
    get nav_channels() {
        return this.#raw.nav_channels;
    }

    /**
     * @return {CardMessageExtraAuthor}
     */
    get author() {
        return this.#raw.author;
    }

    /**
     * @return {CardMessageExtraKMarkdown}
     */
    get kmarkdown() {
        return this.#raw.kmarkdown;
    }
}

class CardMessageContentData {
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
    get user_id() {
        return this.#raw.user_id;
    }

    /**
     * @return {String}
     */
    get target_id() {
        return this.#raw.target_id;
    }

    /**
     * @return {Number}
     */
    get item_id() {
        return this.#raw.item_id;
    }
}

class CardMessageContent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"string" | "item"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {CardMessageContentData[]}
     */
    get data() {
        return this.#raw.data;
    }
}

class CardMessage {
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
     * @return {CardMessageContent}
     */
    get content() {
        return this.#raw.content;
    }

    /**
     * @return {String}
     */
    get verify_token() {
        return this.#raw.verify_token;
    }

    /**
     * @return {String}
     */
    get nonce() {
        return this.#raw.nonce;
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
     * @return {CardMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export {
    TextMessage,
    PictureMessage,
    VideoMessage,
    FileMessage,
    KMarkdownMessage,
    CardMessage,
};
