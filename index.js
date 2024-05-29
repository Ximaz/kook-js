import { KookWebsocket } from "./src/index.js";

const KOOK_WEBSOCKET_TOKEN = process.env.KOOK_WEBSOCKET_TOKEN;
const client = new KookWebsocket(KOOK_WEBSOCKET_TOKEN);

client.on("ready", function () {
    console.log("Bot is ready");
});

client.on("debug", function(msg) {
    console.log(msg);
})

client.on("guild_member_offline", function(guildMember) {
    console.log(`${guildMember.extra.body.user_id} is now offline`);
});

client.on("guild_member_online", function(guildMember) {
    console.log(`${guildMember.extra.body.user_id} is now online`);
});

client.login().catch(function (err) {
    console.error(err);
});
