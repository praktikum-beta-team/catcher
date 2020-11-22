import { AUTH_SIGNUP } from "app/constants/api";

import { request } from "../request";
import type { ISignupRequest } from "../types";

export const signup = request<ISignupRequest, null>(AUTH_SIGNUP);
