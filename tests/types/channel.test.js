import { Channel } from "../../src/types.js";

test("Checks that Channel class correctly binds attributes of a raw response", function () {
    const raw = {
        id: "53002000000000",
        name: "新的频道",
        user_id: "2418239356",
        guild_id: "6016389000000",
        is_category: false,
        parent_id: "6016400000000000",
        level: 12,
        slow_mode: 0,
        topic: "新的频道的说明",
        type: 1,
        permission_overwrites: [
            {
                role_id: 0,
                allow: 0,
                deny: 0,
            },
        ],
        permission_users: [
            {
                user: {
                    id: "0",
                    username: "花荣",
                    identify_num: "12",
                    online: true,
                    os: "Websocket",
                    status: 1,
                    avatar: "xxxx",
                    mobile_verified: true,
                    nickname: "test",
                    roles: [],
                    joined_at: 1602596021000,
                    active_time: 1612703344396,
                },
                allow: 0,
                deny: 0,
            },
        ],
        permission_sync: 1,
    };
    const channel = new Channel(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(channel[k]);
});
