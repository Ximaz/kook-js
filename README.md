# Kook JS

A Javascript SDK to program bots and webhooks for the Kook (kaiheila) application.

# TODO :

Once types are all implemented, repass on each of them, and when a property is
a Kook object, construct it using new, and if it's a list of Kook object,
construct them using a loop, so that it's easier to inherit the may-be-implemented
methods for those custom types.

# Example :

```js
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
```
