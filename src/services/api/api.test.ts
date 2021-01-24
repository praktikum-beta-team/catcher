import nock from "nock";

import { settings } from "config/settings";
import { api } from "./api";

const { apiBase } = settings;

const scope = nock(apiBase).defaultReplyHeaders({
  "access-control-allow-origin": "*",
  "access-control-allow-credentials": "true",
});

describe("Сервис API", () => {
  it("авторизация", async () => {
    const data = {
      login: "foo",
      password: "bar",
    };

    scope.post("/auth/signin", data).reply(200);

    const response = await api.signin({ data });

    expect(response.status).toEqual(200);
  });
});
