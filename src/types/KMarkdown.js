/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description KMarkdown implementation
 */

import APIExecutor from "../api/index.js";

class BaseKMarkdownMentionPart {
    #api;

    /** @type {String} */
    id;

    /** @type {String} */
    username;

    /** @type {String} */
    full_name;

    /** @type {String} */
    avatar;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
    }
}

/**
 * @link `https://developer.kookapp.cn/doc/event/message#KMarkdown 消息`
 */
class BaseKMarkdown {
    #api;

    /** @type {String} */
    raw_content;

    /** @type {String[]} */
    mention_part;

    /** @type {BaseKMarkdownMentionPart[]} */
    mention_role_part;

    /**
     * @param {Object} raw
     * @param {APIExecutor} api
     */
    constructor(raw, api) {
        Object.assign(this, raw);
        this.#api = api;
        this.mention_role_part = raw.mention_role_part.map(
            (r) => new BaseKMarkdownMentionPart(r, api)
        );
    }
}

export { BaseKMarkdown };
