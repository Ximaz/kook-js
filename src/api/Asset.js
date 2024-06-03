/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook Asset API : https://developer.kookapp.cn/doc/http/asset
 */

import APIExecutor from "./index.js";
import FormData, { Stream } from "form-data";

/**
 * @typedef {Object} UserChatAPIListParams
 * @property {Number} [page]
 * @property {Number} [page_size]
 */

class AssetAPI {
    #api;

    /**
     * @param {APIExecutor} api
     */
    constructor(api) {
        this.#api = api;
    }

    /**
     * @param {Buffer | Stream} file
     * @param {String | FormData.AppendOptions} [options]
     * @return {Promise<String>}
     */
    async create(file, options = undefined) {
        const form = new FormData();

        form.append("file", file, options);
        return (await this.#api.execute("POST", "/asset/create", { data: form, headers: form.getHeaders() }))
            .data.url;
    }
}

export { AssetAPI };
