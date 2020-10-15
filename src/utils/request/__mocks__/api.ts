import nock from "nock";

import { BASE_URL } from "constants/api";

export const api = nock(BASE_URL).defaultReplyHeaders({
  "access-control-allow-origin": "*",
  "access-control-allow-credentials": "true",
});
