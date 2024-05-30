/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Message objects : https://developer.kookapp.cn/doc/event/message
 * https://developer.kookapp.cn/doc/cardmessage
 * https://developer.kookapp.cn/doc/kmarkdown
 */

/**
 * @typedef {Object} BaseTextMessageExtra
 * @property {1} type
 * @property {String} guild_id
 * @property {String} channel_name
 * @property {String[]} mention
 * @property {Boolean} mention_all
 * @property {Number[]} mention_roles
 * @property {Boolean} mention_here
 * @property {String} code
 * @property {import("./User.js").BaseUser} author
 *
 * @typedef {Object} BaseTextMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {1} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {BaseTextMessageExtra} extra
 */

/**
 * @param {BaseTextMessage} raw
 */
export function messageText(raw) {
    return { ...raw };
}

/**
 * @typedef {Object} BaseImageMessageExtra
 * @property {2} type
 * @property {String} guild_id
 * @property {String} code
 * @property {import("./User.js").BaseUser} author
 * @property {import("./Attachment.js").BaseImageAttachment} attachments
 *
 * @typedef {Object} BaseImageMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {2} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {BaseImageMessageExtra} extra
 */

/**
 * @param {BaseImageMessage} raw
 */
export function messageImage(raw) {
    return { ...raw };
}

/**
 * @typedef {Object} BaseVideoMessageExtra
 * @property {3} type
 * @property {String} guild_id
 * @property {String} code
 * @property {import("./User.js").BaseUser} author
 * @property {import("./Attachment.js").BaseVideoAttachment} attachments
 *
 * @typedef {Object} BaseVideoMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {3} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {BaseVideoMessageExtra} extra
 */

/**
 * @param {BaseVideoMessage} raw
 */
export function messageVideo(raw) {
    return { ...raw };
}

/**
 * @typedef {Object} BaseFileMessageExtra
 * @property {4} type
 * @property {String} guild_id
 * @property {String} code
 * @property {import("./User.js").BaseUser} author
 * @property {import("./Attachment.js").BaseFileAttachment} attachments
 *
 * @typedef {Object} BaseFileMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {4} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {BaseFileMessageExtra} extra
 */

/**
 * @param {BaseFileMessage} raw
 */
export function messageFile(raw) {
    return { ...raw };
}

/**
 * @typedef {Object} BaseKMarkdownMessageExtra
 * @property {9} type
 * @property {String} guild_id
 * @property {String} channel_name
 * @property {String[]} mention
 * @property {Boolean} mention_all
 * @property {Number[]} mention_roles
 * @property {Boolean} mention_here
 * @property {any[]} nav_channels Undefined in the documentation yet
 * @property {String} code
 * @property {import("./User.js").BaseUser} author
 * @property {import("./KMarkdown.js").BaseKMarkdown} kmarkdown
 *
 * @typedef {Object} BaseKMarkdownMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {9} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {BaseKMarkdownMessageExtra} extra
 */

/**
 * @param {BaseKMarkdownMessage} raw
 */
export function messageKMarkdown(raw) {
    return { ...raw };
}

/**
 * @typedef {Object} BaseCardMessageExtra
 * @property {10} type
 * @property {String} guild_id
 * @property {String} channel_name
 * @property {String[]} mention
 * @property {Boolean} mention_all
 * @property {Number[]} mention_roles
 * @property {Boolean} mention_here
 * @property {any[]} nav_channels Undefined in the documentation yet
 * @property {String} code
 * @property {import("./User.js").BaseUser} author
 *
 * @typedef {Object} BaseCardMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {10} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {BaseCardMessageExtra} extra
 */

/**
 * @param {BaseCardMessage} raw
 */
export function messageCard(raw) {
    return { ...raw };
}

/**
 * @typedef {Object} BasePropsMessageContentData
 * @property {String} user_id
 * @property {String} target_id
 * @property {Number} item_id
 *
 * @typedef {Object} BasePropsMessageContent
 * @property {"string" | "item"} type
 * @property {BasePropsMessageContentData} data
 *
 * @typedef {Object} BasePropsMessageExtra
 * @property {12} type
 * @property {String} guild_id
 * @property {String} channel_name
 * @property {String[]} mention
 * @property {import("./User.js").BaseUser} author
 * @property {import("./KMarkdown.js").BaseKMarkdown} kmarkdown
 *
 * @typedef {Object} BasePropsMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {12} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {BasePropsMessageContent} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {BasePropsMessageExtra} extra
 */

/**
 * @param {BasePropsMessage} raw
 */
export function messageProps(raw) {
    return { ...raw };
}

/**
 * @typedef {Object} BaseMessageExtra
 * @property {1 | 2 | 3 | 4 | 9 | 10 | 12} type
 * @property {import("./User.js").BaseUser} author
 * @property {String} [guild_id]
 * @property {String} [channel_name]
 * @property {String[]} [mention]
 * @property {Boolean} [mention_all]
 * @property {Number[]} [mention_roles]
 * @property {Boolean} [mention_here]
 * @property {any[]} [nav_channels] Undefined in the documentation yet
 * @property {String} [code]
 * @property {import("./Attachment.js").BaseAttachment} [attachments]
 * @property {import("./KMarkdown.js").BaseKMarkdown} [kmarkdown]
 *
 * @typedef {Object} BaseMessage
 * @property {"PERSON" | "GROUP" | "BROADCAST"} channel_type
 * @property {1 | 2 | 3 | 4 | 9 |10 | 12} type
 * @property {String} target_id
 * @property {String} author_id
 * @property {String | BasePropsMessageContent} content
 * @property {String} msg_id
 * @property {Number} msg_timestamp
 * @property {String} nonce
 * @property {String} verify_token
 * @property {BaseMessageExtra} extra
 */

/**
 * @param {BaseMessage} raw
 */
export function message(raw) {
    return { ...raw };
}
