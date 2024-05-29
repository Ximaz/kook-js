/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Module for Kook objects' types
 */

/**
 * @typedef {import("./User.js").BaseUser} BaseUser
 */
export { user } from "./User.js";

/**
 * @typedef {import("./Guild.js").BaseGuild} BaseGuild
 */
export { guild } from "./Guild.js";

/**
 * @typedef {import("./Role.js").BaseRole} BaseRole
 */
export { role } from "./Role.js";

/**
 * @typedef {import("./Channel.js").BaseChannel} BaseChannel
 */
export { channel } from "./Channel.js";

/**
 * @typedef {import("./Quote.js").BaseQuote} BaseQuote
 */
export { quote } from "./Quote.js";

/**
 * @typedef {import("./Emoji.js").BaseEmoji} BaseEmoji
 */
export { emoji } from "./Emoji.js";

/**
 * @typedef {import("./Attachment.js").BaseImageAttachment} BaseImageAttachment
 * @typedef {import("./Attachment.js").BaseVideoAttachment} BaseVideoAttachment
 * @typedef {import("./Attachment.js").BaseFileAttachment} BaseFileAttachment
 * @typedef {import("./Attachment.js").BaseAttachment} BaseAttachment
 */
export {
    attachment,
    attachmentImage,
    attachmentVideo,
    attachmentFile,
} from "./Attachment.js";

/**
 * @typedef {import("./Message.js").BaseTextMessage} BaseTextMessage
 * @typedef {import("./Message.js").BaseImageMessage} BaseImageMessage
 * @typedef {import("./Message.js").BaseVideoMessage} BaseVideoMessage
 * @typedef {import("./Message.js").BaseFileMessage} BaseFileMessage
 * @typedef {import("./Message.js").BaseKMarkdownMessage} BaseKMarkdownMessage
 * @typedef {import("./Message.js").BaseCardMessage} BaseCardMessage
 * @typedef {import("./Message.js").BasePropsMessage} BasePropsMessage
 * @typedef {import("./Message.js").BaseMessage} BaseMessage
 */
export {
    messageText,
    messageImage,
    messageVideo,
    messageFile,
    messageKMarkdown,
    messageCard,
    messageProps,
    message,
} from "./Message.js";
