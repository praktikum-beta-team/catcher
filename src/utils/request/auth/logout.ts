import { AUTH_LOGOUT } from "consts";

import { request } from "../request";

export const logout = request(AUTH_LOGOUT);
