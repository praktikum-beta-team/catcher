import { AUTH_USER } from "consts";

import { request } from "../request";

export const user = request(AUTH_USER, "GET");
