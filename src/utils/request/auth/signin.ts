import { AUTH_SIGNIN } from "consts";

import { request } from "../request";

interface ISignIn {
  login: string;
  password: string;
}

export const signIn = request<ISignIn>(AUTH_SIGNIN);
