import { auth } from "utils/request";

import { info } from "./models/user";

it("signup", async () => {
  await auth.signup(
    info,
    (data) => {
      expect(data.status).toEqual(200);
    },
    (e) => {
      expect(e.response?.status).toEqual(400);
    }
  );
});
