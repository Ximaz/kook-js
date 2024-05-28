import { TextMessage, PictureMessage } from "../../src/types.js";

test("Checks that TextMessage class correctly binds attributes of a raw response", function () {
    const raw = {
        channel_type: "GROUP",
        type: 1,
        target_id: "xxxxxx",
        author_id: "xxxxx",
        content: "dddd",
        msg_id: "67637d4c-xxxx-xxxx-xxxx-xxxxx",
        msg_timestamp: 1607674740160,
        nonce: "",
        extra: {
            type: 1,
            guild_id: "xxxxx",
            channel_name: "文字频道",
            mention: [],
            mention_all: false,
            mention_roles: [],
            mention_here: false,
            code: "",
            author: {
                identify_num: "xxxxx",
                avatar: "https://img.kaiheila.cn/avatars/2020-11/r0j9.jpg/icon",
                username: "xxxxx",
                id: "xxxxx",
                nickname: "xxxxx",
                roles: [],
            },
        },
    };
    const obj = new TextMessage(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(obj[k]);
});

test("Checks that PictureMessage class correctly binds attributes of a raw response", function () {
    const raw = {
        channel_type: "GROUP",
        type: 2,
        target_id: "xxxxx",
        author_id: "xxxxx",
        content: "https://img.kaiheila.cn/assets/2020-12/asasd.jpg",
        msg_id: "67637d4c-xxxx-xxxx-xxxx-xxxxx",
        msg_timestamp: 1607678646991,
        nonce: "",
        extra: {
            type: 2,
            code: "",
            guild_id: "xxxxx",
            attachments: {
                type: "image",
                name: "xxxx.jpg",
                url: "https://img.kaiheila.cn/assets/2020-12/IHT5x5oSLA07o03m.jpg",
            },
            author: {
                identify_num: "xxxxx",
                avatar: "https://img.kaiheila.cn/avatars/2020-11/r26z1e70f20j9.jpg/icon",
                username: "xxxxx",
                id: "xxxxx",
                nickname: "xxxxx",
                roles: [],
            },
        },
    };
    const obj = new PictureMessage(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(obj[k]);
});
