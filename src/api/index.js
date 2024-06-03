/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook API Executor
 */

import axios from "axios";

/**
 * @param {Map<string, string>} headers Axios' response headers
 * @returns {Number} The delay to sleep for in milliseconds
 */
function getRatelimitTimeout(headers) {
    if (headers["X-Rate-Limit-Remaining"] === "0") {
        const reset = parseInt(headers["X-Rate-Limit-Reset"]);
        const limit = parseInt(headers["X-Rate-Limit-Limit"]);
        return Math.ceil(reset / limit);
    }
    return 0;
}

/**
 * @param {Number} ms The sleep delay in milliseconds
 * @returns {Promisse<any>}
 */
function sleep(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}

class APIExecutor {
    #api;

    /**
     * @param {Number} version The API version
     * @param {String} token The Kook Websocket token
     */
    constructor(version, token) {
        this.#api = axios.create({
            headers: {
                Authorization: `Bot ${token}`,
                "Accept-Language": "en-US",
                Accept: "application/json",
            },
            baseURL: `https://www.kookapp.cn/api/v${version}`,
        });
    }

    /**
     * @typedef {Object} APIExecutorOptions
     * @property {any} data
     * @property {any} params
     * @property {any} headers
     *
     * @param {String} method The method to use
     * @param {String} endpoint The endpoint to hit
     * @param {APIExecutorOptions} options The options
     */
    async execute(method, endpoint, { data, params, headers } = options) {
        const config = {
            method,
            url: `${this.#api.defaults.baseURL}${endpoint}`,
            data,
            params,
            headers: {
                ...this.#api.defaults.headers,
                ...headers,
            },
        };
        try {
            let response = await this.#api.request(config);
            const ratelimit = getRatelimitTimeout(response.headers);
            if (0 !== ratelimit) {
                await sleep(ratelimit);
                response = await this.#api.request(config);
            }
            if (0 !== response.data.code)
                throw new Error(
                    `${response.data.message} (Error code : ${response.data.code})`
                );
            return response.data;
        } catch (err) {
            if (err.response?.data)
                throw new Error(JSON.stringify(err.response.data));
            throw err;
        }
    }
}

export default APIExecutor;

export * from "./Guild.js";
export * from "./Channel.js";
export * from "./ChannelUser.js";
export * from "./UserChat.js";
export * from "./User.js";
export * from "./Asset.js";
