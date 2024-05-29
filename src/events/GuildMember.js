/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook GuildMember events : https://developer.kookapp.cn/doc/event/guild-member
 */

import { RawEvent } from "./RawEvent.js";

/* --- GUILD MEMBER JOINED EVENT : https://developer.kookapp.cn/doc/event/guild-member#新成员加入服务器 */

class GuildMemberJoinedEventExtraBody {
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
     * @return {Number}
     */
    get joined_at() {
        return this.#raw.joined_at;
    }
}

class GuildMemberJoinedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"joined_guild"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildMemberJoinedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildMemberJoinedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildMemberJoinedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- GUILD MEMBER EXITED EVENT : https://developer.kookapp.cn/doc/event/guild-member#服务器成员退出 */

class GuildMemberExitedEventExtraBody {
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
     * @return {Number}
     */
    get exited_at() {
        return this.#raw.exited_at;
    }
}

class GuildMemberExitedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"exited_guild"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildMemberExitedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildMemberExitedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildMemberExitedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- GUILD MEMBER UPDATED EVENT : https://developer.kookapp.cn/doc/event/guild-member#服务器成员信息更新 */

class GuildMemberUpdatedEventExtraBody {
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
    get nickname() {
        return this.#raw.nickname;
    }
}

class GuildMemberUpdatedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"updated_guild_member"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildMemberUpdatedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildMemberUpdatedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildMemberUpdatedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- GUILD MEMBER ONLINE EVENT : https://developer.kookapp.cn/doc/event/guild-member#服务器成员上线 */

class GuildMemberPresenceEventExtraBody {
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
     * @return {Number}
     */
    get event_time() {
        return this.#raw.event_time;
    }

    /**
     * @return {String[]}
     */
    get guilds() {
        return this.#raw.guilds;
    }
}

class GuildMemberPresenceEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"guild_member_online" | "guild_member_offline"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {GuildMemberPresenceEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildMemberPresenceEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildMemberPresenceEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export {
    GuildMemberJoinedEvent,
    GuildMemberExitedEvent,
    GuildMemberUpdatedEvent,
    GuildMemberPresenceEvent,
};
