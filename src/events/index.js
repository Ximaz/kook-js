/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Module for Kook events' types https://developer.kookapp.cn/doc/event/event-introduction
 */

/**
 * Channel Events
 * @typedef {import("./Channel.js").ChannelAddedReaction} ChannelAddedReaction
 * @typedef {import("./Channel.js").ChannelDeletedReaction} ChannelDeletedReaction
 * @typedef {import("./Channel.js").ChannelUpdatedMessage} ChannelUpdatedMessage
 * @typedef {import("./Channel.js").ChannelDeletedMessage} ChannelDeletedMessage
 * @typedef {import("./Channel.js").ChannelAddedChannel} ChannelAddedChannel
 * @typedef {import("./Channel.js").ChannelUpdatedChannel} ChannelUpdatedChannel
 * @typedef {import("./Channel.js").ChannelDeletedChannel} ChannelDeletedChannel
 * @typedef {import("./Channel.js").ChannelPinnedMessage} ChannelPinnedMessage
 * @typedef {import("./Channel.js").ChannelUnpinnedMessage} ChannelUnpinnedMessage
 */

/**
 * DirectMessage Events
 * @typedef {import("./DirectMessage.js").DirectMessageUpdatedPrivateMessage} DirectMessageUpdatedPrivateMessage
 * @typedef {import("./DirectMessage.js").DirectMessageDeletedPrivateMessage} DirectMessageDeletedPrivateMessage
 * @typedef {import("./DirectMessage.js").DirectMessagePrivateAddedReaction} DirectMessagePrivateAddedReaction
 * @typedef {import("./DirectMessage.js").DirectMessagePrivateDeletedReaction} DirectMessagePrivateDeletedReaction
 */

/**
 * GuildMember Events
 * @typedef {import("./GuildMember.js").GuildMemberJoinedGuild} GuildMemberJoinedGuild
 * @typedef {import("./GuildMember.js").GuildMemberExitedGuild} GuildMemberExitedGuild
 * @typedef {import("./GuildMember.js").GuildMemberUpdatedGuildMember} GuildMemberUpdatedGuildMember
 * @typedef {import("./GuildMember.js").GuildMemberGuildMemberOnline} GuildMemberGuildMemberOnline
 * @typedef {import("./GuildMember.js").GuildMemberGuildMemberOffline} GuildMemberGuildMemberOffline
 */

/**
 * GuildRole Events
 * @typedef {import("./GuildRole.js").GuildAddedRole} GuildAddedRole
 * @typedef {import("./GuildRole.js").GuildDeletedRole} GuildDeletedRole
 * @typedef {import("./GuildRole.js").GuildUpdatedRole} GuildUpdatedRole
 */

/**
 * Guild Events
 * @typedef {import("./Guild.js").GuildUpdatedGuild} GuildUpdatedGuild
 * @typedef {import("./Guild.js").GuildDeletedGuild} GuildDeletedGuild
 * @typedef {import("./Guild.js").GuildAddedBlockList} GuildAddedBlockList
 * @typedef {import("./Guild.js").GuildDeletedBlockList} GuildDeletedBlockList
 * @typedef {import("./Guild.js").GuildAddedEmoji} GuildAddedEmoji
 * @typedef {import("./Guild.js").GuildRemovedEmoji} GuildRemovedEmoji
 * @typedef {import("./Guild.js").GuildUpdatedEmoji} GuildUpdatedEmoji
 */

/**
 * @typedef {import("../types/index.js").BaseMessage} BaseMessage
 */

/**
 * User Events
 * @typedef {import("./User.js").UserJoinedChannel} UserJoinedChannel
 * @typedef {import("./User.js").UserExitedChannel} UserExitedChannel
 * @typedef {import("./User.js").UserUpdated} UserUpdated
 * @typedef {import("./User.js").UserSelfJoinedGuild} UserSelfJoinedGuild
 * @typedef {import("./User.js").UserSelfExitedGuild} UserSelfExitedGuild
 * @typedef {import("./User.js").UserMessageBtnClick} UserMessageBtnClick
 */

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

export {};
