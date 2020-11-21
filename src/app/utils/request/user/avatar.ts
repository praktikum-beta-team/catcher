import { USER_PROFILE_AVATAR } from "constants/api";

import { request } from "../request";

export const changeAvatar = request<FormData>(USER_PROFILE_AVATAR, "PUT");
