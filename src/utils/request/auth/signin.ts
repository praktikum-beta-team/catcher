import { AUTH_SIGNIN } from "constants/api";

import { request } from "../request";
import type { ISigninRequest, ISigninError } from "../types";

export const signin = request<ISigninRequest, null, ISigninError>(AUTH_SIGNIN);
