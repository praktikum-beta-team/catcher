import { auth } from "utils/request";

import { creditionals } from "./models/user";

it("signin", async () => {
  await auth.signin(
    creditionals,
    (data) => {
      expect(data.status).toEqual(200);
    },
    (e) => expect(e.response?.status).toEqual(401)
  );
});
