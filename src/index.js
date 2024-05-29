/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook SDK entry point
 */

import { ChannelReactionEvent } from "./events/Channel.js";
import { KookWebsocket } from "./websocket/websocket.js";

const KOOK_WEBSOCKET_TOKEN = process.env.KOOK_WEBSOCKET_TOKEN;
const websocket = new KookWebsocket(KOOK_WEBSOCKET_TOKEN);

websocket.on("ready", function () {
    console.log("bot is ready");
});

websocket.on("debug", function (data) {
    if (3 !== data.s) console.log(data, data.d?.extra?.body);
});

websocket.on("added_reaction", function (data) {
    console.log(data.extra.body.msg_id);
});

websocket.login().catch(function (err) {
    console.error(err);
});
