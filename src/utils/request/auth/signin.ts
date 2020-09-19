import { AUTH_SIGNIN } from "constants/api";

import { request } from "../request";

interface ISignin {
  login: string;
  password: string;
}

export const signin = request<ISignin>(AUTH_SIGNIN);
