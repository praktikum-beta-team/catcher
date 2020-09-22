import { AUTH_SIGNUP } from "constants/api";

import { request } from "../request";

export interface ISignupRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

interface ISignupError {
  reason: string;
}

export const signup = request<ISignupRequest, null, ISignupError>(AUTH_SIGNUP);
