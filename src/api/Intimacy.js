/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Intimacy API : https://developer.kookapp.cn/doc/http/intimacy
 */

import APIExecutor from "./index.js";
import { BaseIntimacy } from "../types/index.js";

/**
 * @typedef {Object} IntimacyAPIUpdateParams
 * @param {Number} [score]
 * @param {String} [social_info]
 * @param {String} [img_id]
 */

class IntimacyAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @param {String} user_id
     * @return {Promise<BaseIntimacy>}
     */
    async index(user_id) {
        return (
            await this.#api.execute("GET", "/intimacy/index", {
                params: { user_id },
            })
        ).data;
    }

    /**
     * @param {String} user_id
     * @param {IntimacyAPIUpdateParams} [params]
     * @return {Promise<any>}
     */
    async update(user_id, params = {}) {
        return await this.#api.execute("POST", "/intimacy/update", {
            params: { user_id, ...params },
        });
    }
}

export { IntimacyAPI };
