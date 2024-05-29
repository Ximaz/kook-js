/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Kook SDK entry point
 */

import { KookWebsocket } from "./websocket/websocket.js";

const KOOK_WEBSOCKET_TOKEN = process.env.KOOK_WEBSOCKET_TOKEN;
const websocket = new KookWebsocket(KOOK_WEBSOCKET_TOKEN);

websocket.on("ready", function() {
    console.log("bot is ready");
})

websocket.on("debug", function(data) {
    console.log("[debug]", data);
})

websocket.login().catch(function(err) { console.error(err) });
