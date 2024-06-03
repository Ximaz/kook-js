/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook User API : https://developer.kookapp.cn/doc/http/user
 */

import APIExecutor from "./index.js";
import { BaseUser } from "../types/index.js";

class UserAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @return {Promise<BaseUser[]>}
     */
    async me() {
        return (await this.#api.execute("GET", "/user/me")).data;
    }

    /**
     * @param {String} user_id
     * @param {String} [guild_id]
     * @return {Promise<BaseUser[]>}
     */
    async view(user_id, guild_id = undefined) {
        return (
            await this.#api.execute("GET", "/user/view", {
                params: { user_id, guild_id },
            })
        ).data;
    }

    /**
     * @return {Promise<any>}
     */
    async offline() {
        return await this.#api.execute("POST", "/user/offline");
    }
}

export { UserAPI };
