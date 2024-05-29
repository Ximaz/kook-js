/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Message events : https://developer.kookapp.cn/doc/event/message
 */

import { RawEvent } from "./RawEvent.js";

class MessageEventContentData {
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

class MessageEventContent {
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
     * @return {MessageEventContentData}
     */
    get data() {
        return this.#raw.data;
    }
}

class MessageEventExtraAttachment {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"image" | "video" | "file"}
     */
    get type() {
        return this.#raw.type;
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
    get url() {
        return this.#raw.url;
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

class MessageEventExtraAuthorTagInfo {
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

class MessageEventExtraAuthor {
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
     * @return {"Websocket" | "Webhook"}
     */
    get os() {
        return this.#raw.os;
    }

    /**
     * @return {0 | 1 | 10}
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
     * @return {MessageEventExtraAuthorTagInfo}
     */
    get tag_info() {
        return this.#raw.tag_info;
    }
}

class MessageEventExtraKMarkdownMentionPart {
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

class MessageEventExtraKMarkdown {
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
     * @return {String[]}
     */
    get mention() {
        return this.#raw.mention;
    }

    /**
     * @return {any[]}
     */
    get mention_role_part() {
        return this.#raw.mention_role_part;
    }

    /**
     * @return {any[]}
     */
    get item_part() {
        return this.#raw.item_part;
    }

    /**
     * @return {MessageEventExtraKMarkdownMentionPart[]}
     */
    get mention_part() {
        return this.#raw.mention_part;
    }
}

class MessageEventExtra {
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
     * @return {String}
     */
    get channel_name() {
        return this.#raw.channel_name;
    }

    /**
     * @return {1 | 2 | 3 | 4 | 9 | 10 | 12}
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
     * @return {MessageEventExtraAttachment}
     */
    get attachments() {
        return this.#raw.attachments;
    }

    /**
     * @return {MessageEventExtraAuthor}
     */
    get author() {
        return this.#raw.author;
    }

    /**
     * @return {MessageEventExtraKMarkdown}
     */
    get kmarkdown() {
        return this.#raw.kmarkdown;
    }
}

class MessageEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {String | MessageEventContent}
     */
    get content() {
        return this.#raw.content;
    }

    /**
     * @return {MessageEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export { MessageEvent };
