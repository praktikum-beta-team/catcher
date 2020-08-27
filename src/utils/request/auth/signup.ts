import { AUTH_SIGNUP } from "consts";

import { request } from "../request";

interface ISignUp {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export const signUp = request<ISignUp>(AUTH_SIGNUP);
