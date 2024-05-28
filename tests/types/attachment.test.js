import { Attachment } from "../../src/types.js";

test("Checks that Attachment class correctly binds attributes of a raw response", function () {
    const raw = {
        type: "video",
        url: "https://***.mp4",
        name: "***.mp4",
        size: 2575670,
    };
    const attachment = new Attachment(raw);

    for (const k of Object.keys(raw)) expect(raw[k]).toBe(attachment[k]);
});
