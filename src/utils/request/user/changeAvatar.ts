import { USER_CHANGE_AVATAR } from "constants/api";

import { request } from "../request";

interface IChangeAvatarError {
  reason: string;
}

export const changeAvatar = request<FormData, null, IChangeAvatarError>(USER_CHANGE_AVATAR, "PUT");
