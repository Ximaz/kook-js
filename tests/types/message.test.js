import { TextMessage, PictureMessage, VideoMessage, FileMessage } from "../../src/types.js";

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

test("Checks that VideoMessage class correctly binds attributes of a raw response", function () {
    const raw = {
        channel_type: "GROUP",
        type: 3,
        target_id: "xxxxx",
        author_id: "xxxxx",
        content: "https://img.kaiheila.cn/attachments/2020-12/11/asd.mp4",
        msg_id: "67637d4c-xxxx-xxxx-xxxx-xxxxx",
        msg_timestamp: 1607679613599,
        nonce: "",
        extra: {
            type: 3,
            guild_id: "xxxx",
            code: "",
            attachments: {
                type: "video",
                url: "https://img.kaiheila.cn/attachments/2020-12/11/asd.mp4",
                name: "002iQMhagx07Fx0S41200323o0E010.mp4",
                file_type: "video/mp4",
                size: 722882,
                duration: 15.673,
                width: 360,
                height: 635,
            },
            author: {
                identify_num: "xxxxx",
                avatar: "https://img.kaiheila.cn/avatars/2020-11/r20f20j9.jpg/icon",
                username: "xxxxx",
                id: "xxxxx",
                nickname: "xxxxx",
                roles: [],
            },
        },
    };
    const obj = new VideoMessage(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(obj[k]);
});

test("Checks that FileMessage class correctly binds attributes of a raw response", function () {
    const raw = {
        channel_type: "GROUP",
        type: 4,
        target_id: "xxxx",
        author_id: "xxxx",
        content: "https://img.kaiheila.cn/attachments/2020-12/11/asd.txt",
        msg_id: "67637d4c-xxxx-xxxx-xxxx-xxxxx",
        msg_timestamp: 1607679683305,
        nonce: "",
        extra: {
            type: 4,
            guild_id: "xxxx",
            code: "",
            attachments: {
                type: "file",
                url: "https://img.kaiheila.cn/attachments/2020-12/11/asd.txt",
                name: "voice-message.txt",
                file_type: "text/plain",
                size: 7320,
            },
            author: {
                identify_num: "xxxx",
                avatar: "https://img.kaiheila.cn/avatars/2020-11/asd.jpg/icon",
                username: "xxxx",
                id: "xxxx",
                nickname: "xxxx",
                roles: [],
            },
        },
    };
    const obj = new FileMessage(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(obj[k]);
});
