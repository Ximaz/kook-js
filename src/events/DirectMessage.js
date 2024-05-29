/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Channel events : https://developer.kookapp.cn/doc/event/direct-message
 */

import { RawEvent } from "./RawEvent.js";

/* --- PRIVATE MESSAGE UPDATED EVENT : https://developer.kookapp.cn/doc/event/direct-message#私聊消息更新 */

class DirectMessageUpdatedEventExtraBody {
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
    get msg_id() {
        return this.#raw.msg_id;
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
    get target_id() {
        return this.#raw.target_id;
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
    get chat_code() {
        return this.#raw.chat_code;
    }

    /**
     * @return {Number}
     */
    get updated_at() {
        return this.#raw.updated_at;
    }
}

class DirectMessageUpdatedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"updated_private_message"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {DirectMessageUpdatedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class DirectMessageUpdatedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {DirectMessageUpdatedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- PRIVATE MESSAGE DELETED EVENT : https://developer.kookapp.cn/doc/event/direct-message#私聊消息被删除 */

class DirectMessageDeletedEventExtraBody {
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
    get msg_id() {
        return this.#raw.msg_id;
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
    get target_id() {
        return this.#raw.target_id;
    }

    /**
     * @return {String}
     */
    get chat_code() {
        return this.#raw.chat_code;
    }

    /**
     * @return {Number}
     */
    get deleted_at() {
        return this.#raw.deleted_at;
    }
}

class DirectMessageDeletedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"updated_private_message"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {DirectMessageDeletedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class DirectMessageDeletedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {DirectMessageDeletedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- PRIVATE MESSAGE REACTION EVENT: https://developer.kookapp.cn/doc/event/channel#私聊内用户添加 reaction */

class DirectMessageReactionEventExtraBodyEmoji {
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
}

class DirectMessageReactionEventExtraBody {
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
    get chat_code() {
        return this.#raw.chat_code;
    }

    /**
     * @return {String}
     */
    get msg_id() {
        return this.#raw.msg_id;
    }

    /**
     * @return {DirectMessageReactionEventExtraBodyEmoji}
     */
    get emoji() {
        return this.#raw.emoji;
    }
}

class DirectMessageReactionEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"private_added_reaction" | "deleted_private_message"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {DirectMessageReactionEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class DirectMessageReactionEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {DirectMessageReactionEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export {
    DirectMessageUpdatedEvent,
    DirectMessageDeletedEvent,
    DirectMessageReactionEvent,
};
