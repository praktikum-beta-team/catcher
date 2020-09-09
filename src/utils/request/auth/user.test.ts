import { auth } from "utils/request";

import { creditionals } from "./models/user";

it("logout", async () => {
  await auth.signin(
    creditionals,
    async (data) => {
      expect(data.status).toEqual(200);
      await auth.user({}, (userData) => {
        expect(userData.status).toEqual(200);
      });
    },
    (e) => expect(e.response?.status).toEqual(401)
  );
});
