/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook GuildRole events : https://developer.kookapp.cn/doc/event/guild-role
 */

import { RawEvent } from "./RawEvent.js";
import { Role } from "../types/Role.js";

/* --- GUILD ROLE EVENT : https://developer.kookapp.cn/doc/event/guild-role#服务器角色增加 */

class GuildRoleEventExtra {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {"added_role" | "deleted_role" | "updated_role"}
     */
    get type() {
        return this.#raw.type;
    }

    /**
     * @return {Role}
     */
    get body() {
        return this.#raw.body;
    }
}

class GuildRoleEvent extends RawEvent {
    #raw;

    /**
     * @param {Object} raw
     */
    constructor(raw) {
        this.#raw = Object.freeze(raw);
    }

    /**
     * @return {GuildRoleEventExtra}
     */
    get extra() {
        return this.#raw.extra;
    }
}

export { GuildRoleEvent };
