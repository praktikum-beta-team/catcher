import { USER_CHANGE_AVATAR } from "constants/api";

import { request } from "../request";

export const changeAvatar = request<FormData>(USER_CHANGE_AVATAR, "PUT");
