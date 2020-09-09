import { AUTH_SIGNUP } from "consts";

import { request } from "../request";

interface ISignup {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export const signup = request<ISignup>(AUTH_SIGNUP);
