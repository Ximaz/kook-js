import { Quote } from "../../src/types.js";

test("Checks that Quote class correctly binds attributes of a raw response", function () {
    const raw = {
        id: "1c4532f6-*********-93e9-6347f410f91c",
        type: 1,
        content: "hello world",
        create_at: 1628069285358,
        author: {
            id: "308****000",
            username: "盖 伦",
            identify_num: "**10",
            online: true,
            os: "Websocket",
            status: 1,
            avatar: "https://xxx.jpg/icon",
            vip_avatar: "",
            nickname: "***11377",
            roles: [102, 816],
            is_vip: false,
            bot: false,
            mobile_verified: true,
            joined_at: 1573816459000,
            active_time: 1628229821490,
        },
    };
    const quote = new Quote(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(quote[k]);
});
