/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Badge API : https://developer.kookapp.cn/doc/http/badge
 */

import APIExecutor from "./index.js";

class BadgeAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @param {String} guild_id
     * @param {0 | 1 | 2} [style]
     * @return {Promise<any>}
     */
    async guild(guild_id, style = 0) {
        return await this.#api.execute("GET", "/badge/guild", {
            params: { guild_id, style },
            headers: { Accept: undefined },
        });
    }
}

export { BadgeAPI };
