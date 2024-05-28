import { Role } from "../../src/types.js";

test("Checks that Role class correctly binds attributes of a raw response", function () {
    const raw = {
        role_id: 109472,
        name: "管理员",
        color: 0,
        position: 1,
        hoist: 0,
        mentionable: 0,
        permissions: 1,
    };
    const role = new Role(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(role[k]);
});
