import type { AxiosResponse } from "axios";
import axios from "app/helpers/configure-axios";
import type { IRequestConfig } from "app/helpers/configure-axios";
import { CLIENT_ID, CLIENT_SECRET } from "app/constants/yandexOAuth";

import type {
  IYandexPasportRequest,
  IYandexPasportResponse,
  IYandexTokenRequest,
  IYandexTokenResponse,
} from "./types";

export const getToken = (code: string) => {
  const config: IRequestConfig<IYandexTokenRequest> = {
    baseURL: "https://oauth.yandex.ru",
    data: {
      grant_type: <const>"authorization_code",
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    },
    transformResponse: ({ data: { access_token } }: AxiosResponse<IYandexTokenResponse>) =>
      access_token,
  };

  return axios.post<string>("/token", config);
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
