import { USER_CHANGE_AVATAR } from "constants/api";

import { request } from "../request";

export interface IChangeProfileRequest {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
}

interface IChangeProfileError {
  reason: string;
}

export const changeProfile = request<IChangeProfileRequest, null, IChangeProfileError>(
  USER_CHANGE_AVATAR,
  "PUT"
);
