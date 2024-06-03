/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook SDK Websocket implementation https://developer.kookapp.cn/doc/websocket
 */

import { EventEmitter } from "node:events";

import Websocket, { WEBSOCKET_EVENTS } from "./websocket.js";
import {
    /* Channel Events */
    ChannelAddedReaction,
    ChannelDeletedReaction,
    ChannelUpdatedMessage,
    ChannelDeletedMessage,
    ChannelAddedChannel,
    ChannelUpdatedChannel,
    ChannelDeletedChannel,
    ChannelPinnedMessage,
    ChannelUnpinnedMessage,

    /* DirectMessage Events */
    DirectMessageUpdatedPrivateMessage,
    DirectMessageDeletedPrivateMessage,
    DirectMessagePrivateAddedReaction,
    DirectMessagePrivateDeletedReaction,

    /* GuildMember Events */
    GuildMemberJoinedGuild,
    GuildMemberExitedGuild,
    GuildMemberUpdatedGuildMember,
    GuildMemberGuildMemberOnline,
    GuildMemberGuildMemberOffline,

    /* GuildRole Events */
    GuildAddedRole,
    GuildDeletedRole,
    GuildUpdatedRole,

    /* Guild Events */
    GuildUpdatedGuild,
    GuildDeletedGuild,
    GuildAddedBlockList,
    GuildDeletedBlockList,
    GuildAddedEmoji,
    GuildRemovedEmoji,
    GuildUpdatedEmoji,

    /* Message Events */
    BaseTextMessage,
    BaseImageMessage,
    BaseVideoMessage,
    BaseFileMessage,
    BaseKMarkdownMessage,
    BaseCardMessage,
    BasePropsMessage,
    BaseMessage,

    /* User Events */
    UserJoinedChannel,
    UserExitedChannel,
    UserUpdated,
    UserSelfJoinedGuild,
    UserSelfExitedGuild,
    UserMessageBtnClick,
} from "../events/index.js";
import APIExecutor, {
    GuildAPI,
    ChannelAPI,
    ChannelUserAPI,
    UserChatAPI,
    UserAPI,
    AssetAPI
} from "../api/index.js";

/**
 * @typedef {Object} KookEvents
 *
 * Channel Events
 * @property {function(ChannelAddedReaction): void} added_reaction
 * @property {function(ChannelDeletedReaction): void} deleted_reaction
 * @property {function(ChannelUpdatedMessage): void} updated_message
 * @property {function(ChannelDeletedMessage): void} deleted_message
 * @property {function(ChannelAddedChannel): void} added_channel
 * @property {function(ChannelUpdatedChannel): void} updated_channel
 * @property {function(ChannelDeletedChannel): void} deleted_channel
 * @property {function(ChannelPinnedMessage): void} pinned_message
 * @property {function(ChannelUnpinnedMessage): void} unpinned_message
 *
 * DirectMessage Events
 * @property {function(DirectMessageUpdatedPrivateMessage): void} updated_message
 * @property {function(DirectMessageDeletedPrivateMessage): void} deleted_message
 * @property {function(DirectMessagePrivateAddedReaction): void} private_added_reaction
 * @property {function(DirectMessagePrivateDeletedReaction): void} private_deleted_reaction
 *
 * GuildMember Events
 * @property {function(GuildMemberJoinedGuild): void} joined_guild
 * @property {function(GuildMemberExitedGuild): void} exited_guild
 * @property {function(GuildMemberUpdatedGuildMember): void} updated_guild_member
 * @property {function(GuildMemberGuildMemberOnline): void} guild_member_online
 * @property {function(GuildMemberGuildMemberOffline): void} guild_member_offline
 *
 * GuildRole Events
 * @property {function(GuildAddedRole): void} added_role
 * @property {function(GuildDeletedRole): void} deleted_role
 * @property {function(GuildUpdatedRole): void} updated_role
 *
 * Guild Events
 * @property {function(GuildUpdatedGuild): void} updated_guild
 * @property {function(GuildDeletedGuild): void} deleted_guild
 * @property {function(GuildAddedBlockList): void} added_block_list
 * @property {function(GuildDeletedBlockList): void} deleted_block_list
 * @property {function(GuildAddedEmoji): void} added_emoji
 * @property {function(GuildRemovedEmoji): void} removed_emoji
 * @property {function(GuildUpdatedEmoji): void} updated_emoji
 *
 * Message Events
 * @property {function(BaseTextMessage): void} text_message
 * @property {function(BaseImageMessage): void} image_message
 * @property {function(BaseVideoMessage): void} video_message
 * @property {function(BaseFileMessage): void} file_message
 * @property {function(BaseKMarkdownMessage): void} kmarkdown_message
 * @property {function(BaseCardMessage): void} card_message
 * @property {function(BasePropsMessage): void} props_message
 * @property {function(BaseMessage): void} message
 *
 * User Events
 * @property {function(UserJoinedChannel): void} joined_channel
 * @property {function(UserExitedChannel): void} exited_channel
 * @property {function(UserUpdated): void} user_updated
 * @property {function(UserSelfJoinedGuild): void} self_joined_guild
 * @property {function(UserSelfExitedGuild): void} self_exited_guild
 * @property {function(UserMessageBtnClick): void} message_btn_click
 *
 * @property {function(): void} ready
 * @property {function(): void} disconnected
 * @property {function(any): void} debug
 */

/* https://developer.kookapp.cn/doc/reference#API 版本管理 */
const API_VERSION = 3;

const MESSAGE_TYPES = {
    1: "text_message",
    2: "image_message",
    3: "video_message",
    4: "file_message",
    9: "kmarkdown_message",
    10: "card_message",
    12: "props_message",
};

/**
 * TODO:
 * - fetch guilds -> users
 *                -> roles
 *                -> channels
 * - fetch dms
 * - fetch users -> fetch guilds.users.all() + fetch.dms.all()
 * - implement a cache system, with explicit refesh ? Delay ?
 *
 * @example
 * ```javascript
 * client.once("ready", function () {
 *    console.log(`The bot is currently on ${client.guilds.length} guilds`);
 *    console.log(`The bot is currently watching ${client.users.length} users`);
 *    console.log(`The bot can access ${client.channels.length} channels`);
 * });
 * ```
 */

class KookClient extends EventEmitter {
    /** @type {APIExecutor} */
    #api;

    #events = {
        added_reaction: ChannelAddedReaction,
        deleted_reaction: ChannelDeletedReaction,
        updated_message: ChannelUpdatedMessage,
        deleted_message: ChannelDeletedMessage,
        added_channel: ChannelAddedChannel,
        updated_channel: ChannelUpdatedChannel,
        deleted_channel: ChannelDeletedChannel,
        pinned_message: ChannelPinnedMessage,
        unpinned_message: ChannelUnpinnedMessage,
        updated_message: DirectMessageUpdatedPrivateMessage,
        deleted_message: DirectMessageDeletedPrivateMessage,
        private_added_reaction: DirectMessagePrivateAddedReaction,
        private_deleted_reaction: DirectMessagePrivateDeletedReaction,
        joined_guild: GuildMemberJoinedGuild,
        exited_guild: GuildMemberExitedGuild,
        updated_guild_member: GuildMemberUpdatedGuildMember,
        guild_member_online: GuildMemberGuildMemberOnline,
        guild_member_offline: GuildMemberGuildMemberOffline,
        added_role: GuildAddedRole,
        deleted_role: GuildDeletedRole,
        updated_role: GuildUpdatedRole,
        updated_guild: GuildUpdatedGuild,
        deleted_guild: GuildDeletedGuild,
        added_block_list: GuildAddedBlockList,
        deleted_block_list: GuildDeletedBlockList,
        added_emoji: GuildAddedEmoji,
        removed_emoji: GuildRemovedEmoji,
        updated_emoji: GuildUpdatedEmoji,
        text_message: BaseTextMessage,
        image_message: BaseImageMessage,
        video_message: BaseVideoMessage,
        file_message: BaseFileMessage,
        kmarkdown_message: BaseKMarkdownMessage,
        card_message: BaseCardMessage,
        props_message: BasePropsMessage,
        message: BaseMessage,
        joined_channel: UserJoinedChannel,
        exited_channel: UserExitedChannel,
        user_updated: UserUpdated,
        self_joined_guild: UserSelfJoinedGuild,
        self_exited_guild: UserSelfExitedGuild,
        message_btn_click: UserMessageBtnClick,
    };

    /** @type {Websocket} */
    #ws = null;

    /** @type {String} */
    #session_id = null;

    /** @type {Boolean} */
    #reconnect = false;

    /**
     * @param {String} token
     */
    constructor(token) {
        super();
        this.#api = new APIExecutor(API_VERSION, token);
        this.managers = {
            guild: new GuildAPI(this.#api),
            channel: new ChannelAPI(this.#api),
            channel_user: new ChannelUserAPI(this.#api),
            user_chat: new UserChatAPI(this.#api),
            user: new UserAPI(this.#api),
            asset: new AssetAPI(this.#api)
        };
    }

    #onOpen() {
        if (null !== this.#ws) this.#ws.heartbeat();
    }

    /**
     * @param {RawEvent} packet The received event packet
     */
    async #onMessage(packet) {
        if (null === this.#ws) return;
        const { s, d } = await this.#ws.parsePacketResponse(packet);

        this.emit("debug", { s, d });
        switch (s) {
            case WEBSOCKET_EVENTS.EVENT:
                if (isNaN(d.extra?.type)) {
                    this.emit(
                        d.extra.type,
                        new this.#events[d.extra.type](d, this.#api)
                    );
                } else {
                    this.emit(
                        new this.#events[MESSAGE_TYPES[parseInt(d.extra.type)]](
                            d,
                            this.#api
                        )
                    );
                    this.emit("message", d);
                }
                break;
            case WEBSOCKET_EVENTS.HANDSHAKE:
                const { sessionId, session_id } = d;
                this.#session_id = sessionId || session_id;
                this.emit("ready");
                break;
            case WEBSOCKET_EVENTS.PONG:
                this.#ws.heartbeat();
                break;
            case WEBSOCKET_EVENTS.RESUME_SESSION:
                this.#ws.resume();
                break;
            case WEBSOCKET_EVENTS.RECONNECT:
                this.#ws.disconnect();
                this.#session_id = "";
                this.#reconnect = true;
                break;
            case WEBSOCKET_EVENTS.RESUME_ACK:
                break;
            /* This should never happen unless Kookapp adds new events. */
            default:
                throw new Error(`Unhandled event: ${s}`);
        }
    }

    async #onClose() {
        if (true === this.#reconnect) {
            this.#reconnect = false;
            await this.login();
        } else await this.disconnect();
    }

    async login() {
        const params = {
            compress: 1,
        };
        if (null !== this.#session_id) {
            params.resume = 1;
            params.session_id = this.#session_id;
            if (null !== this.#ws) params.sn = this.#ws.sn;
            else params.sn = 0;
        }
        const { data } = await this.#api.execute("GET", "/gateway/index", {
            params,
        });
        if (null === this.#ws) this.#ws = new Websocket(data.url);
        this.#ws.setHandler("open", (...args) => this.#onOpen(args));
        this.#ws.setHandler("message", (...args) => this.#onMessage(args));
        this.#ws.setHandler("close", (...args) => this.#onClose(args));
    }

    async disconnect() {
        if (null !== this.#ws) this.#ws.stop();
        this.emit("disconnect");
    }

    /**
     * @template {keyof KookEvents} K
     * @param {K} event
     * @param {KookEvents[K]} listener
     * @return {KookClient}
     */
    on(event, listener) {
        super.on(event, listener);
        return this;
    }

    /**
     * @template {keyof KookEvents} K
     * @param {K} event
     * @param {KookEvents[K]} listener
     * @return {KookClient}
     */
    once(event, listener) {
        super.once(event, listener);
        return this;
    }

    /**
     * @template {keyof KookEvents} K
     * @param {K} event
     * @param {...Parameters<KookEvents[K]>} args
     * @return {Boolean}
     */
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
}

export { KookClient };
