import { KookClient } from "./src/index.js";

const KOOK_WEBSOCKET_TOKEN = process.env.KOOK_WEBSOCKET_TOKEN;
const client = new KookClient(KOOK_WEBSOCKET_TOKEN);

client.on("ready", function () {
    console.log("Bot is ready");
});

client.on("message", function(message) {
    console.log(message.content);
})

client.login().catch(function (err) {
    console.error(err);
});
