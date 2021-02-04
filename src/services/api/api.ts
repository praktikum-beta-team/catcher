import type { AxiosPromise } from "axios";
import axios from "helpers/configure-axios";
import type { IRequestConfig } from "helpers/configure-axios";

import type {
  ISignupRequest,
  ISigninRequest,
  IUserRequest,
  IUserResponse,
  ILeaderboardRequest,
  ILeaderboardNewLeaderRequest,
  LeaderboardResponse,
  IYandexOAuthLoginRequest,
} from "./types";

const signup = (config: IRequestConfig<ISignupRequest>) => axios("/auth/signup", config);

const signin = (config: IRequestConfig<ISigninRequest>) => axios("/auth/signin", config);

const fetchUserData = (config?: IRequestConfig) => axios.get<IUserResponse>("/auth/user", config);

const changeUserData = (config: IRequestConfig<IUserRequest>) =>
  axios("/user/profile", {
    ...config,
    method: "PUT",
  });

const changeUserAvatar = (config: IRequestConfig<FormData>) =>
  axios("/user/profile/avatar", { ...config, method: "PUT" });

const logout = (config?: IRequestConfig) => axios("/auth/logout", config);

const featchLeaders = (
  config: IRequestConfig<ILeaderboardRequest>
): AxiosPromise<LeaderboardResponse> => axios("/leaderboard/all", config);

const addUserToLeaderboard = (config: IRequestConfig<ILeaderboardNewLeaderRequest>) =>
  axios("/leaderboard", config);

const loginWithYandexOAuth = (config: IRequestConfig<IYandexOAuthLoginRequest>) =>
  axios("/oauth/yandex", config);

/**
 * TODO: вынести роуты в константы
 */

export const api = {
  signup,
  signin,
  fetchUserData,
  changeUserData,
  changeUserAvatar,
  logout,
  featchLeaders,
  addUserToLeaderboard,
  loginWithYandexOAuth,
};
