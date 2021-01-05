import axios from "app/helpers/configure-axios";
import type { IRequestConfig } from "app/helpers/configure-axios";

import type {
  ISignupRequest,
  ISigninRequest,
  IUserRequest,
  IUserResponse,
  ILeaderboardRequest,
  ILeaderboardNewLeaderRequest,
} from "./types";

const signup = (config: IRequestConfig<ISignupRequest>) => axios("/auth/signup", config);

const signin = (config: IRequestConfig<ISigninRequest>) => axios("/auth/signin", config);

const fetchUserData = (config?: IRequestConfig) => axios.get<IUserResponse>("/auth/user", config);

const changeUserData = (config: IRequestConfig<IUserRequest>) => axios.put("user/profile", config);

const changeUserAvatar = (config: IRequestConfig<FormData>) =>
  axios.put("user/profile/avatar", config);

const logout = (config?: IRequestConfig) => axios("/auth/logout", config);

const featchLeaders = (config: IRequestConfig<ILeaderboardRequest>) =>
  axios("/leaderboard/all", config);

const addUserToLeaderboard = (config: IRequestConfig<ILeaderboardNewLeaderRequest>) =>
  axios("/leaderboard", config);

export const api = {
  signup,
  signin,
  fetchUserData,
  changeUserData,
  changeUserAvatar,
  logout,
  featchLeaders,
  addUserToLeaderboard,
};
