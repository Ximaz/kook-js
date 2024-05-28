import { TextMessage } from "../../src/types.js";

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
    const textMessage = new TextMessage(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(textMessage[k]);
});
