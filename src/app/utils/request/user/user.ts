import { USER_PROFILE } from "app/constants/api";

import { request } from "../request";
import type { IUserRequest } from "../types";

export const changeProfile = request<IUserRequest>(USER_PROFILE, "PUT");
