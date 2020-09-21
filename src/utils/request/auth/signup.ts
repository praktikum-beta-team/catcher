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

export const signup = request<ISignupRequest>(AUTH_SIGNUP);
