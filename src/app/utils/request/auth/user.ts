import { AUTH_USER } from "app/constants/api";

import { request } from "../request";
import type { IUserResponse } from "../types";

export const user = request<null, IUserResponse>(AUTH_USER, "GET");
