/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook objects : https://developer.kookapp.cn/doc/objects
 */

/* --- Trivial Types --- */

class Role {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {Number}
     */
    get role_id() {
        return this.#raw.role_id;
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

class GuildRole extends Role {}

class UserTagInfo {
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

class User {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {Number}
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
     * @return {Boolean}
     */
    get online() {
        return this.#raw.online;
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
        return this.#raw.vip_avatar ?? "";
    }

    /**
     * @return {Boolean}
     */
    get bot() {
        return this.#raw.bot;
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
    get mobile_verified() {
        return this.#raw.mobile_verified;
    }

    /**
     * @return {UserTagInfo}
     */
    get tag_info() {
        return this.#raw.tag_info;
    }
}

class GuildUser extends User {
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
    get os() {
        return this.#raw.os ?? "";
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

    /**
     * @return {Boolean}
     */
    get is_vip() {
        return this.#raw.is_vip ?? false;
    }

    /**
     * @return {Number}
     */
    get joined_at() {
        return this.#raw.joined_at;
    }

    /**
     * @return {Number}
     */
    get active_time() {
        return this.#raw.active_time;
    }
}

class ChannelPermissionUser {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildUser}
     */
    get user() {
        return this.#raw.user;
    }

    /**
     * @return {Number}
     */
    get allow() {
        return this.#raw.allow;
    }

    /**
     * @return {Number}
     */
    get deny() {
        return this.#raw.deny;
    }
}

class ChannelPermissionOverwrite {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
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
    get allow() {
        return this.#raw.allow;
    }

    /**
     * @return {Number}
     */
    get deny() {
        return this.#raw.deny;
    }
}

class Channel {
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
    get name() {
        return this.#raw.name;
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
    get guild_id() {
        return this.#raw.guild_id;
    }

    /**
     * @return {Boolean}
     */
    get is_category() {
        return this.#raw.is_category;
    }

    /**
     * @return {String}
     */
    get parent_id() {
        return this.#raw.parent_id;
    }

    /**
     * @return {Number}
     */
    get level() {
        return this.#raw.level;
    }

    /**
     * @return {Number}
     */
    get slow_mode() {
        return this.#raw.slow_mode;
    }

    /**
     * @return {String}
     */
    get topic() {
        return this.#raw.topic;
    }

    /**
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {ChannelPermissionOverwrite[]}
     */
    get permission_overwrites() {
        return this.#raw.permission_overwrites;
    }

    /**
     * @return {ChannelPermissionUser[]}
     */
    get permission_users() {
        return this.#raw.permission_users;
    }

    /**
     * @return {Number}
     */
    get permission_sync() {
        return this.#raw.permission_sync;
    }

    /**
     * @return {Boolean}
     */
    get has_password() {
        return this.#raw.has_password;
    }
}

class GuildChannel extends Channel {
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
    get parent_id() {
        return this.#raw.parent_id;
    }

    /**
     * @return {Number}
     */
    get limit_amount() {
        return this.#raw.limit_amount;
    }

    /**
     * @return {Boolean}
     */
    get is_category() {
        return this.#raw.is_category;
    }
}

class Guild {
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
    get name() {
        return this.#raw.name;
    }

    /**
     * @return {String}
     */
    get topic() {
        return this.#raw.topic;
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
    get icon() {
        return this.#raw.icon;
    }

    /**
     * @return {Number}
     */
    get notify_type() {
        return this.#raw.notify_type;
    }

    /**
     * @return {String}
     */
    get region() {
        return this.#raw.region;
    }

    /**
     * @return {Boolean}
     */
    get enable_open() {
        return this.#raw.enable_open;
    }

    /**
     * @return {String}
     */
    get open_id() {
        return this.#raw.open_id;
    }

    /**
     * @return {String}
     */
    get default_channel_id() {
        return this.#raw.default_channel_id;
    }

    /**
     * @return {String}
     */
    get welcome_channel_id() {
        return this.#raw.welcome_channel_id;
    }

    /**
     * @return {GuildRole[]}
     */
    get roles() {
        return this.#raw.roles;
    }
    /**
     * @return {GuildChannel[]}
     */
    get channels() {
        return this.#raw.channels;
    }
}

class Quote {
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
     * @return {Number}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {String}
     */
    get content() {
        return this.#raw.content;
    }

    /**
     * @return {Number}
     */
    get create_at() {
        return this.#raw.create_at;
    }

    /**
     * @return {GuildUser}
     */
    get author() {
        return this.#raw.author;
    }
}

class Attachement {
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
     * @return {Number}
     */
    get size() {
        return this.#raw.size;
    }
}

class FileAttachement extends Attachement {
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
    get file_type() {
        return this.#raw.file_type;
    }
}

class VideoAttachement extends FileAttachement {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
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

class KMarkdown {
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
     * @return {Number[]}
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

/* --- Event Types --- */

class Message {
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

    /**
     * @return {String}
     */
    get verify_token() {
        return this.#raw.verify_token;
    }
}

class MessageExtra {
    #raw;

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
    #raw;

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

class FileMessageExtra extends MessageExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {FileAttachement}
     */
    get attachements() {
        return this.#raw.attachements;
    }
}

class FileMessage extends Message {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {FileMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

class PictureMessageExtra extends MessageExtra {
    #raw;

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
    #raw;

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
    #raw;

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
    #raw;

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

class KMarkdownMessageExtra extends MessageExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {Number[]}
     */
    get nav_channels() {
        return this.#raw.nav_channels;
    }

    /**
     * @return {KMarkdown}
     */
    get kmarkdown() {
        return this.#raw.kmarkdown;
    }
}

class KMarkdownMessage extends Message {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {KMarkdownMessageExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export {
    /* --- Trivial Types --- */
    User,
    Guild,
    Role,
    Channel,
    Quote,
    Attachement,
    FileAttachement,
    VideoAttachement,
    KMarkdown,

    /* --- Event Types --- */
    TextMessage,
    PictureMessage,
    VideoMessage,
    FileMessage,
    KMarkdownMessage
};
