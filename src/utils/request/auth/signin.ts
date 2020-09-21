import { AUTH_SIGNIN } from "constants/api";

import { request } from "../request";

export interface ISigninRequest {
  login: string;
  password: string;
}

interface ISigninError {
  reason: string;
}

export const signin = request<ISigninRequest, Record<string, undefined>, ISigninError>(AUTH_SIGNIN);
