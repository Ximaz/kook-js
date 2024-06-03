/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Guild API : https://developer.kookapp.cn/doc/http/guild
 */

import APIExecutor from "./index.js";
import {
    BaseChannel,
    BaseChannelPermissionOverwrite,
    BaseChannelPermissionUser,
    BaseUser,
} from "../types/index.js";

/**
 * @typedef {Object} ChannelAPIListParams
 * @property {Number} [page]
 * @property {Number} [page_size]
 * @property {1 | 2} [type] 1 = text, 2 = voice
 */

/**
 * @typedef {Object} ChannelAPICreateParams
 * @property {String} [parent_id]
 * @property {Number} [type]
 * @property {Number} [limit_amount]
 * @property {String} [voice_quality]
 * @property {Number} [is_category]
 */

/**
 * @typedef {Object} ChannelAPIUpdateParams
 * @property {String} [name]
 * @property {Number} [level]
 * @property {String} [parent_id]
 * @property {String} [topic]
 * @property {0 | 5000 | 10000 | 15000 | 30000 | 60000 | 120000 | 300000 | 600000 | 900000 | 1800000 | 3600000 | 7200000 | 21600000} [slow_mode]
 * @property {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99} [limit_amount]
 * @property {"1" | "2" | "3"} [voice_quality]
 * @property {String} [password]
 */

/**
 * @typedef {Object} ChannelPermissionsWithSync
 * @property {BaseChannelPermissionOverwrite[]} permission_overwrites
 * @property {BaseChannelPermissionUser[]} permission_users
 * @property {0 | 1} permission_sync
 */

/**
 * @typedef {Object} ChannelAPIRoleCreateParams
 * @property {"user_id" | "role_id"} [type]
 * @property {String} [value] either the 'user_id' or the 'role_id' ('type')
 */

/**
 * @typedef {Object} ChannelAPIRoleUpdateParams
 * @property {"user_id" | "role_id"} [type]
 * @property {String} [value] either the 'user_id' or the 'role_id' ('type')
 * @property {Number} [allow]
 * @property {Number} [deny]
 */

/**
 * @typedef {Object} ChannelPermissionsWithoutSync
 * @property {BaseChannelPermissionOverwrite[]} permission_overwrites
 * @property {BaseChannelPermissionUser[]} permission_users
 */

class ChannelAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @param {String} guild_id
     * @param {ChannelAPIListParams} params
     * @returns {Promise<BaseChannel[]>}
     */
    async list(guild_id, params) {
        return (
            await this.#api.execute("GET", "/channel/list", {
                params: { guild_id, ...params },
            })
        ).data.items;
    }

    /**
     * @param {String} guild_id
     * @param {Boolean} needs_children
     * @returns {Promise<BaseChannel>}
     */
    async view(target_id, needs_children = true) {
        return (
            await this.#api.execute("GET", "/channel/view", {
                params: { target_id, needs_children },
            })
        ).data;
    }

    /**
     * @param {String} guild_id
     * @param {String} name
     * @param {ChannelAPICreateParams} [params]
     * @returns {Promise<BaseChannel>}
     */
    async create(guild_id, name, params = {}) {
        return (
            await this.#api.execute("POST", "/channel/create", {
                data: {
                    guild_id,
                    name,
                    ...params,
                },
            })
        ).data;
    }

    /**
     * @param {String} channel_id
     * @param {ChannelAPIUpdateParams} [params]
     * @returns {Promise<BaseChannel>}
     */
    async update(channel_id, params = {}) {
        return (
            await this.#api.execute("POST", "/channel/update", {
                data: {
                    channel_id,
                    ...params,
                },
            })
        ).data;
    }

    /**
     * @param {String} channel_id
     * @returns {Promise<any>}
     */
    async delete(channel_id) {
        return await this.#api.execute("POST", "/channel/delete", {
            data: {
                channel_id,
            },
        });
    }

    /**
     * @param {String} guild_id
     * @param {String} target_id
     * @returns {Promise<any>}
     */
    async kickout(guild_id, user_id) {
        return this.#api.execute("POST", "/guild/kickout", {
            data: {
                guild_id,
                user_id,
            },
        });
    }

    /**
     * @param {String} channel_id
     * @returns {Promise<BaseUser[]>}
     */
    async user_list(channel_id) {
        return (
            await this.#api.execute("GET", "/channel/user-list", {
                params: {
                    channel_id,
                },
            })
        ).data;
    }

    /**
     * @param {String} target_id
     * @param {String[]} user_ids
     * @returns {Promise<BaseUser[]>}
     */
    async move_user(target_id, user_ids) {
        return await this.#api.execute("POST", "/channel/move-user", {
            params: {
                target_id,
                user_ids,
            },
        });
    }

    /**
     * @param {String} channel_id
     * @returns {Promise<ChannelPermissionsWithSync>}
     */
    async role_index(channel_id) {
        return (
            await this.#api.execute("GET", "/channel-role/index", {
                params: {
                    channel_id,
                },
            })
        ).data;
    }

    /**
     * @param {String} channel_id
     * @param {ChannelAPIRoleCreateParams} [params]
     * @returns {Promise<BaseChannelPermissionOverwrite | BaseChannelPermissionUser>}
     */
    async role_create(channel_id, params = {}) {
        return (
            await this.#api.execute("POST", "/channel-role/create", {
                params: {
                    channel_id,
                    ...params,
                },
            })
        ).data;
    }

    /**
     * @param {String} channel_id
     * @param {ChannelAPIRoleUpdateParams} [params]
     * @returns {Promise<BaseChannelPermissionOverwrite | BaseChannelPermissionUser>}
     */
    async role_update(channel_id, params = {}) {
        return (
            await this.#api.execute("POST", "/channel-role/update", {
                params: {
                    channel_id,
                    ...params,
                },
            })
        ).data;
    }

    /**
     * @param {String} channel_id
     * @returns {Promise<ChannelPermissionsWithoutSync>}
     */
    async role_sync(channel_id) {
        return (
            await this.#api.execute("POST", "/channel-role/sync", {
                params: {
                    channel_id,
                },
            })
        ).data;
    }

    /**
     * @param {String} channel_id
     * @returns {Promise<any>}
     */
    async role_sync(channel_id) {
        return await this.#api.execute("POST", "/channel-role/delete", {
            params: {
                channel_id,
            },
        });
    }
}

export { ChannelAPI };
