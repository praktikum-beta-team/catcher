import { USER_PROFILE } from "constants/api";

import { request } from "../request";
import type { IUserRequest, IUserError } from "../types";

export const changeProfile = request<IUserRequest, null, IUserError>(USER_PROFILE, "PUT");
