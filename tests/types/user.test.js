import { User } from "../../src/types.js";

test("Checks that User class correctly binds attributes of a raw response", function() {
    const raw = {
        "id": "2418200000",
        "username": "tz-un",
        "identify_num": "5618",
        "online": false,
        "avatar": "https://img.kookapp.cn/avatars/2020-02/xxxx.jpg/icon",
        "vip_avatar": "https://img.kookapp.cn/avatars/2020-02/xxxx.jpg/icon",
        "bot": false,
        "status" : 0,
        "mobile_verified": true,
        "nickname": "12316993",
        "roles": [
            111,
            112
        ],
    };
    const user = new User(raw);

    for (const k of Object.values(raw))
        expect(raw[k]).toBe(user[k]);
})
