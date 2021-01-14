import type { AxiosResponse } from "axios";
import qs from "qs";
import axios from "helpers/configure-axios";
import type { IRequestConfig } from "helpers/configure-axios";
import { CLIENT_ID, CLIENT_SECRET } from "constants/yandexOAuth";

import type { IYandexPasportRequest, IYandexPasportResponse, IYandexTokenRequest } from "./types";

export const getToken = (code: string) => {
  const config: IRequestConfig<IYandexTokenRequest> = {
    method: "POST",
    baseURL: "https://oauth.yandex.ru",
    data: {
      grant_type: <const>"authorization_code",
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    },
  };
  return axios("/token", { ...config, data: qs.stringify(config.data) });
};

export const getPasportInfo = (token: string) => {
  const config: IRequestConfig<IYandexPasportRequest> = {
    baseURL: "https://login.yandex.ru",
    data: {
      format: <const>"json",
    },
    headers: {
      Authorization: `OAuth ${token}`,
    },
  };

  return axios.get<IYandexPasportResponse>("/info", config);
};
