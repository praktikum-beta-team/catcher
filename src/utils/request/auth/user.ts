import { AUTH_USER } from "consts";

import { request } from "../request";

export const user = request<Record<string, unknown>>(AUTH_USER, "GET");
