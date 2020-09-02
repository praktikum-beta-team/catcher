import { AUTH_LOGOUT } from "consts";

import { request } from "../request";

export const logout = request<Record<string, unknown>>(AUTH_LOGOUT);
