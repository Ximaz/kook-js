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

/**
 * @typedef {Object} GuildAPIMuteListMic
 * @param {1} type
 * @param {String[]} user_ids
 *
 * @typedef {Object} GuildAPIMuteListHeadset
 * @param {2} type
 * @param {String[]} user_ids
 *
 * @typedef {Object} GuildAPIMuteList
 * @property {GuildAPIMuteListMic} mic
 * @property {GuildAPIMuteListHeadset} headset
 */

/**
 * @typedef {Object} GuildAPIBoostHistoryParams
 * @param {Number} [start_time]
 * @param {Number} [end_time]
 */

/**
 * @typedef {Object} GuildAPIBoostHistory
 * @property {String} user_id
 * @property {String} guild_id
 * @property {Number} start_time
 * @property {Number} end_time
 * @property {BaseUser} user
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
     * @return {Promise<BaseGuild[]>}
     */
    async list(params) {
        return (await this.#api.execute("GET", "/guild/list", { params })).data
            .items;
    }

    /**
     * @param {String} guild_id
     * @return {Promise<BaseGuild>}
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
     * @return {Promise<BaseUser[]>}
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
     * @return {Promise<any>}
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
     * @return {Promise<any>}
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
     * @return {Promise<any>}
     */
    async kickout(guild_id, target_id) {
        return await this.#api.execute("POST", "/guild/kickout", {
            data: {
                guild_id,
                target_id,
            },
        });
    }

    /**
     * @param {String} guild_id
     * @return {Promise<GuildAPIMuteList>}
     */
    async mute_list(guild_id) {
        return await this.#api.execute("GET", "/guild-mute/list", {
            data: {
                guild_id,
                return_type: "detail",
            },
        }).data;
    }

    /**
     * @param {String} guild_id
     * @param {String} user_id
     * @param {1 | 2} type
     * @return {Promise<any>}
     */
    async mute_create(guild_id, user_id, type) {
        return await this.#api.execute("POST", "/guild-mute/create", {
            data: {
                guild_id,
                user_id,
                type
            },
        });
    }

    /**
     * @param {String} guild_id
     * @param {String} user_id
     * @param {1 | 2} type
     * @return {Promise<any>}
     */
    async mute_delete(guild_id, user_id, type) {
        return await this.#api.execute("POST", "/guild-mute/delete", {
            data: {
                guild_id,
                user_id,
                type
            },
        });
    }

    /**
     * @param {String} guild_id
     * @param {GuildAPIBoostHistoryParams} params
     * @return {Promise<GuildAPIBoostHistory[]>}
     */
    async mute_list(guild_id, params = {}) {
        return await this.#api.execute("POST", "/guild-boost/history", {
            data: {
                guild_id,
                ...params
            },
        }).data.items;
    }
}

export { GuildAPI };
