# Kook JS

A Javascript SDK to program bots and webhooks for the Kook (kaiheila) application.

# Example :

```js
import { KookClient } from "./src/index.js";

const KOOK_WEBSOCKET_TOKEN = process.env.KOOK_WEBSOCKET_TOKEN;
const client = new KookClient(KOOK_WEBSOCKET_TOKEN);

client.once("ready", function () {
    console.log("Bot is ready");
});

client.on("message", function(message) {
    console.log(message.content);
});

client.login().catch(function (err) {
    console.error(err);
});
```
