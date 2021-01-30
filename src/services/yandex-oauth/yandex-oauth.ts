import qs from "qs";
import axios from "helpers/configure-axios";
import type { AxiosPromise } from "axios";
import type { IRequestConfig } from "helpers/configure-axios";

import { yandexOAuthSettings } from "config/settings";

import type {
  IYandexPasportRequest,
  IYandexPasportResponse,
  IYandexTokenRequest,
  IYandexTokenResponse,
} from "./types";

const { clientId, clientSecret } = yandexOAuthSettings;

export const getToken = (code: string): AxiosPromise<IYandexTokenResponse> => {
  const config: IRequestConfig<IYandexTokenRequest> = {
    method: "POST",
    baseURL: "https://oauth.yandex.ru",
    data: {
      grant_type: <const>"authorization_code",
      code,
      client_id: clientId,
      client_secret: clientSecret,
    },
  };

  return axios("/token", { ...config, data: qs.stringify(config.data) });
};

export const fetchUserData = (token: string) => {
  const config: IRequestConfig<IYandexPasportRequest> = {
    baseURL: "https://login.yandex.ru",
    data: {
      format: <const>"json",
    },
    headers: {
      Authorization: `OAuth ${token}`,
    },
  };

  return axios.get<IYandexPasportResponse & { yandexOAuthToken: string }>("/info", config);
};
