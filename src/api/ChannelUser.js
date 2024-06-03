/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Channel User API : https://developer.kookapp.cn/doc/http/channel-user
 */

import APIExecutor from "./index.js";
import { BaseChannel } from "../types/index.js";

/**
 * @typedef {Object} ChannelUserAPIListParams
 * @property {Number} [page]
 * @property {Number} [page_size]
 */

class ChannelUserAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @param {String} guild_id
     * @param {String} user_id
     * @param {ChannelUserAPIListParams} params
     * @returns {Promise<BaseChannel[]>}
     */
    async get_joined_channel(guild_id, user_id, params = {}) {
        return (
            await this.#api.execute("GET", "/channel-user/get-joined-channel", {
                params: { guild_id, user_id, ...params },
            })
        ).data.items;
    }
}

export { ChannelUserAPI };
