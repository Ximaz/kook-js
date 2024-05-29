/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Channel events : https://developer.kookapp.cn/doc/event/channel
 */

import { RawEvent } from "./RawEvent.js";
import { Channel } from "../types/Channel.js";

/* --- CHANNEL REACTION EVENT: https://developer.kookapp.cn/doc/event/channel#频道内用户添加 reaction */

class ChannelReactionEventExtraBodyEmoji {
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

class ChannelReactionEventExtraBody {
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
    get channel_id() {
        return this.#raw.channel_id;
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
    get msg_id() {
        return this.#raw.msg_id;
    }

    /**
     * @return {ChannelReactionEventExtraBodyEmoji}
     */
    get emoji() {
        return this.#raw.emoji;
    }
}

class ChannelReactionEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"added_reaction" | "deleted_reaction"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {ChannelReactionEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class ChannelReactionEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelReactionEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- CHANNEL MESSAGE UPDATED EVENT: https://developer.kookapp.cn/doc/event/channel#频道消息更新 */

class ChannelMessageUpdatedEventExtraBody {
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
    get channel_id() {
        return this.#raw.channel_id;
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
    get updated_at() {
        return this.#raw.updated_at;
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
}

class ChannelMessageUpdatedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"updated_message"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {ChannelMessageUpdatedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class ChannelMessageUpdatedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelMessageUpdatedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- CHANNEL MESSAGE DELETED EVENT: https://developer.kookapp.cn/doc/event/channel#频道消息被删除 */

class ChannelMessageDeletedEventExtraBody {
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
    get channel_id() {
        return this.#raw.channel_id;
    }

    /**
     * @return {String}
     */
    get msg_id() {
        return this.#raw.msg_id;
    }
}

class ChannelMessageDeletedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"updated_message"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {ChannelMessageDeletedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class ChannelMessageDeletedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelMessageDeletedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- CHANNEL ADDED EVENT: https://developer.kookapp.cn/doc/event/channel#新增频道 */

class ChannelAddedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"added_channel"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {Channel}
     */
    get body() {
        return this.#raw.body;
    }
}

class ChannelAddedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelAddedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- CHANNEL UPDATED EVENT: https://developer.kookapp.cn/doc/event/channel#修改频道信息 */

class ChannelUpdatedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"updated_channel"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {Channel}
     */
    get body() {
        return this.#raw.body;
    }
}

class ChannelUpdatedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelUpdatedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- CHANNEL DELETED EVENT: https://developer.kookapp.cn/doc/event/channel#删除频道 */

class ChannelDeletedEventExtraBody {
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
    get deleted_at() {
        return this.#raw.deleted_at;
    }
}

class ChannelDeletedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"deleted_channel"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {ChannelDeletedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class ChannelDeletedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelDeletedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- CHANNEL PIN EVENT: https://developer.kookapp.cn/doc/event/channel#新的频道置顶消息 */

class ChannelPinEventExtraBody {
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
    get channel_id() {
        return this.#raw.channel_id;
    }

    /**
     * @return {String}
     */
    get operator_id() {
        return this.#raw.operator_id;
    }

    /**
     * @return {String}
     */
    get msg_id() {
        return this.#raw.msg_id;
    }
}

class ChannelPinEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"pinned_message" | "unpinned_message"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {ChannelPinEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class ChannelPinEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {ChannelPinEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export {
    ChannelReactionEvent,
    ChannelMessageUpdatedEvent,
    ChannelMessageDeletedEvent,
    ChannelAddedEvent,
    ChannelUpdatedEvent,
    ChannelDeletedEvent,
    ChannelPinEvent
};
