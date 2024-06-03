/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Guild API : https://developer.kookapp.cn/doc/http/guild
 */

import APIExecutor from "./index.js";
import { BaseGuild, BaseUser } from "../types/index.js";

/**
 * @typedef {Object} GuildAPIListParams
 * @property {Number} [page]
 * @property {Number} [page_size]
 * @property {String} [sort]
 */

/**
 * @typedef {Object} GuildAPIUserListFilters
 * @property {String} [channel_id]
 * @property {String} [search]
 * @property {Number} [role_id]
 * @property {Number} [mobile_verified]
 * @property {Number} [active_time]
 * @property {Number} [joined_at]
 * @property {String} [filter_user_id]
 */

class GuildAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @param {GuildAPIListParams} params
     * @returns {Promise<BaseGuild[]>}
     */
    async list(params) {
        return (await this.#api.execute("GET", "/guild/list", { params })).data
            .items;
    }

    /**
     * @param {String} guild_id
     * @returns {Promise<BaseGuild>}
     */
    async view(guild_id) {
        return (
            await this.#api.execute("GET", "/guild/view", {
                params: { guild_id },
            })
        ).data;
    }

    /**
     * @param {String} guild_id
     * @param {GuildAPIUserListFilters} filters
     * @param {GuildAPIListParams} params
     * @returns {Promise<BaseUser[]>}
     */
    async user_list(guild_id, filters, params) {
        return (
            await this.#api.execute("GET", "/guild/user-list", {
                params: {
                    guild_id,
                    ...filters,
                    ...params,
                },
            })
        ).data.items;
    }

    /**
     * @param {String} guild_id
     * @param {String} [nickname]
     * @param {String} [user_id]
     * @returns {Promise<any>}
     */
    async nickname(guild_id, nickname, user_id) {
        return await this.#api.execute("POST", "/guild/nickname", {
            data: {
                guild_id,
                nickname,
                user_id,
            },
        });
    }

    /**
     * @param {String} guild_id
     * @returns {Promise<any>}
     */
    async leave(guild_id) {
        return await this.#api.execute("POST", "/guild/leave", {
            data: {
                guild_id,
            },
        });
    }

    /**
     * @param {String} guild_id
     * @param {String} target_id
     * @returns {Promise<any>}
     */
    async kickout(guild_id, user_id) {
        return await this.#api.execute("POST", "/guild/kickout", {
            data: {
                guild_id,
                user_id,
            },
        });
    }
}

export { GuildAPI };
