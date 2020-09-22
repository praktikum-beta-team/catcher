import { AUTH_LOGOUT } from "constants/api";

import { request } from "../request";

export const logout = request(AUTH_LOGOUT);
