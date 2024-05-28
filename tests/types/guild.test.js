import { Guild } from "../../src/types.js";

test("Checks that Guild class correctly binds attributes of a raw response", function() {
    const raw = {
        "id": "2405000000000",
        "name": "工具",
        "topic": "",
        "user_id": "9200000000",
        "icon": "",
        "notify_type": 1,
        "region": "beijing",
        "enable_open": false,
        "open_id": "0",
        "default_channel_id": "2369000000000",
        "welcome_channel_id": "0",
        "roles": [
            {
                "role_id": 109472,
                "name": "管理员",
                "color": 0,
                "position": 1,
                "hoist": 0,
                "mentionable": 0,
                "permissions": 1
            }
        ],
        "channels": [
            {
                "id": "2369000000000",
                "user_id": "9200000000",
                "parent_id": "",
                "name": "你好",
                "type": 1,
                "level": 1,
                "limit_amount": 0,
                "is_category": false
            },
        ]
      };
    const guild = new Guild(raw);

    for (const k of Object.values(raw))
        expect(raw[k]).toBe(guild[k]);
})
