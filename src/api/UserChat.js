/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook User Chat API : https://developer.kookapp.cn/doc/http/user-chat
 */

import APIExecutor from "./index.js";
import { BaseUserChat } from "../types/index.js";

/**
 * @typedef {Object} UserChatAPIListParams
 * @property {Number} [page]
 * @property {Number} [page_size]
 */

class UserChatAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @param {UserChatAPIListParams} params
     * @return {Promise<BaseUserChat[]>}
     */
    async list(params = {}) {
        return (await this.#api.execute("GET", "/user-chat/list", { params })).data
            .items;
    }

    /**
     * @param {String} chat_code
     * @return {Promise<BaseUserChat>}
     */
    async view(chat_code) {
        return (
            await this.#api.execute("GET", "/user-chat/view", {
                params: { chat_code },
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
     * @param {String} target_id
     * @return {Promise<BaseUserChat>}
     */
    async create(target_id) {
        return await this.#api.execute("POST", "/user-chat/create", {
            data: {
                target_id,
            },
        });
    }

    /**
     * @param {String} chat_code
     * @return {Promise<any>}
     */
    async delete(chat_code) {
        return await this.#api.execute("POST", "/user-chat/delete", {
            data: {
                chat_code,
            },
        });
    }
}

export { UserChatAPI };
