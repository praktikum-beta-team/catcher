import { AUTH_USER } from "constants/api";

import { request } from "../request";

interface IUserResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export const user = request<Record<string, unknown>, IUserResponse>(AUTH_USER, "GET");
