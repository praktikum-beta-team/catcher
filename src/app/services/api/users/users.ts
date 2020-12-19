import { USER_PROFILE, USER_PROFILE_AVATAR } from "app/constants/api";

import { request } from "app/utils/request";

import type { IUserRequest } from "./types";

export const changeUserProfile = request<IUserRequest>(USER_PROFILE, "PUT");

export const changeUserAvatar = request<FormData>(USER_PROFILE_AVATAR, "PUT");
