/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook User events : https://developer.kookapp.cn/doc/event/user
 */

import { RawEvent } from "./RawEvent.js";

/* --- USER JOINED CHANNEL EVENT : https://developer.kookapp.cn/doc/event/user#用户加入语音频道 */

class UserJoinedChannelEventExtraBody {
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
    get channel_id() {
        return this.#raw.channel_id;
    }

    /**
     * @return {Number}
     */
    get joined_at() {
        return this.#raw.joined_at;
    }
}

class UserJoinedChannelEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"joined_channel"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {UserJoinedChannelEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class UserJoinedChannelEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {UserJoinedChannelEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- USER EXITED CHANNEL EVENT : https://developer.kookapp.cn/doc/event/user#用户退出语音频道 */

class UserExitedChannelEventExtraBody {
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
    get channel_id() {
        return this.#raw.channel_id;
    }

    /**
     * @return {Number}
     */
    get exited_at() {
        return this.#raw.exited_at;
    }
}

class UserExitedChannelEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"exited_channel"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {UserExitedChannelEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class UserExitedChannelEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {UserExitedChannelEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- USER UPDATED EVENT : https://developer.kookapp.cn/doc/event/user#用户信息更新 */

class UserUpdatedEventExtraBody {
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
    get username() {
        return this.#raw.username;
    }

    /**
     * @return {String}
     */
    get avatar() {
        return this.#raw.avatar;
    }
}

class UserUpdatedEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"user_updated"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {UserUpdatedEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class UserUpdatedEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {UserUpdatedEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- USER SELF JOINED GUILD EVENT : https://developer.kookapp.cn/doc/event/user#自己新加入服务器 */

class UserSelfJoinedGuildEventExtraBody {
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
    get state() {
        return this.#raw.state;
    }
}

class UserSelfJoinedGuildEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"self_joined_guild"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {UserSelfJoinedGuildEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class UserSelfJoinedGuildEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {UserSelfJoinedGuildEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- USER SELF EXITED GUILD EVENT : https://developer.kookapp.cn/doc/event/user#自己退出服务器 */

class UserSelfExitedGuildEventExtraBody {
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
}

class UserSelfExitedGuildEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"self_exited_guild"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {UserSelfExitedGuildEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class UserSelfExitedGuildEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {UserSelfExitedGuildEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

/* --- USER SELF EXITED GUILD EVENT : https://developer.kookapp.cn/doc/event/user#Card 消息中的 Button 点击事件 */

class UserMessageButtonClickEventExtraBody {
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
    get value() {
        return this.#raw.value;
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
    get user_id() {
        return this.#raw.user_id;
    }

    /**
     * @return {String}
     */
    get target_id() {
        return this.#raw.target_id;
    }
}

class UserMessageButtonClickEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"message_btn_click"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {UserMessageButtonClickEventExtraBody}
     */
    get body() {
        return this.#raw.body;
    }
}

class UserMessageButtonClickEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {UserMessageButtonClickEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export {
    UserJoinedChannelEvent,
    UserExitedChannelEvent,
    UserUpdatedEvent,
    UserSelfJoinedGuildEvent,
    UserSelfExitedGuildEvent,
    UserMessageButtonClickEvent,
};
