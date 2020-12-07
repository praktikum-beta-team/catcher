import { YANDEX_PASPORT, YANDEX_OAUTH } from "app/constants/api";

import { request } from "../request";
import type {
  IYandexPasportRequest,
  IYandexPasportResponse,
  IYandexTokenRequest,
  IYandexTokenResponse,
  IYandexTokenResponseError,
} from "../types";

export const getPasportInfo = request<IYandexPasportRequest, IYandexPasportResponse>(
  YANDEX_PASPORT,
  "GET",
  ""
);

export const getToken = request<
  IYandexTokenRequest,
  IYandexTokenResponse,
  IYandexTokenResponseError
>(YANDEX_OAUTH, "POST", "", true);
