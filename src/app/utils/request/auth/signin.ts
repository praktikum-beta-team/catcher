import { AUTH_SIGNIN } from "app/constants/api";

import { request } from "../request";
import type { ISigninRequest } from "../types";

export const signin = request<ISigninRequest, null>(AUTH_SIGNIN);
