import { AUTH_SIGNIN, AUTH_SIGNUP, AUTH_USER, AUTH_LOGOUT } from "app/constants/api";

import { request } from "app/utils/request";

import type { ISigninRequest, ISignupRequest, IUserResponse } from "./types";

export const signin = request<ISigninRequest, null>(AUTH_SIGNIN);

export const signup = request<ISignupRequest, null>(AUTH_SIGNUP);

export const logout = request<null, null>(AUTH_LOGOUT);

export const fetchUserData = request<null, IUserResponse>(AUTH_USER, "GET");
