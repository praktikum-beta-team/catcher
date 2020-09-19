import { AUTH_LOGOUT } from "constants/api";

import { request } from "../request";

export const logout = request<Record<string, unknown>>(AUTH_LOGOUT);
