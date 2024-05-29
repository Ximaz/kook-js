import { KookWebsocket } from "./src/index.js";

const KOOK_WEBSOCKET_TOKEN = process.env.KOOK_WEBSOCKET_TOKEN;
const client = new KookWebsocket(KOOK_WEBSOCKET_TOKEN);

client.on("ready", function () {
    console.log("Bot is ready");
});

client.on("debug", function(msg) {
    console.log(msg);
})

client.on("added_emoji", function(emoji) {
    console.log(`Emoji '${emoji.extra.body.name}' has been added`);
})

client.login().catch(function (err) {
    console.error(err);
});
