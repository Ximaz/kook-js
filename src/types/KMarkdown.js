/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description KMarkdown implementation
 */

class BaseKMarkdownMentionPart {
    /** @type {String} */
    id;

    /** @type {String} */
    username;

    /** @type {String} */
    full_name;

    /** @type {String} */
    avatar;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

class BaseKMarkdown {
    /** @type {String} */
    raw_content;

    /** @type {String[]} */
    mention_part;

    /** @type {BaseKMarkdownMentionPart[]} */
    mention_role_part;

    constructor(raw) {
        Object.assign(this, raw);
    }
}

export { BaseKMarkdown };
