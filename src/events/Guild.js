/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Guild events : https://developer.kookapp.cn/doc/event/guild
 */

import { RawEvent } from "./RawEvent.js";

/* --- GUILD EVENT : https://developer.kookapp.cn/doc/event/guild#服务器信息更新 */

class GuildEventExtraBody {
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
    get icon() {
        return this.#raw.icon;
    }

    /**
     * @return {String}
     */
    get region() {
        return this.#raw.region;
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
     * @description
     * 1 - All notifications
     * 2 - Only `@mention`
     * 3 - No notification at all
     * @return {Number}
     */
    get notify_type() {
        return this.#raw.notify_type;
    }

    /**
     * @description
     * 0 - open not enabled
     * 1 - open enabled
     * @return {Number}
     */
    get enable_open() {
        return this.#raw.enable_open;
    }
}

class GuildEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"updated_guild" | "deleted_guild"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- GUILD BLOCK LIST ADDED EVENT : https://developer.kookapp.cn/doc/event/guild#服务器封禁用户 */

class GuildAddedBlockListEventExtraBody {
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
    get operator_id() {
        return this.#raw.operator_id;
    }

    /**
     * @return {String}
     */
    get remark() {
        return this.#raw.remark;
    }

    /**
     * @return {String[]}
     */
    get user_id() {
        return this.#raw.user_id;
    }
}

class GuildAddedBlockListEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"added_block_list"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildAddedBlockListEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildAddedBlockListEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildAddedBlockListEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- GUILD BLOCK LIST DELETED EVENT : https://developer.kookapp.cn/doc/event/guild#服务器取消封禁用户 */

class GuildDeletedBlockListEventExtraBody {
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
    get operator_id() {
        return this.#raw.operator_id;
    }

    /**
     * @return {String[]}
     */
    get user_id() {
        return this.#raw.user_id;
    }
}

class GuildDeletedBlockListEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"deleted_block_list"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildDeletedBlockListEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildDeletedBlockListEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildDeletedBlockListEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- GUILD REACTION EVENT: https://developer.kookapp.cn/doc/event/guild#服务器添加新表情 */

class GuildEmojiEventExtraBody {
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

class GuildEmojiEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"added_emoji" | "removed_emoji" | "updated_emoji"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildEmojiEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildEmojiEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildEmojiEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export {
    GuildEvent,
    GuildAddedBlockListEvent,
    GuildDeletedBlockListEvent,
    GuildEmojiEvent,
};
