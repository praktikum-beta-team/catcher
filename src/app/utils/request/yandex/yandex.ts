import { YANDEX_PASPORT } from "app/constants/api";

import { request } from "../request";
import type { IYandexPasportRequest, IYandexPasportResponse } from "../types";

export const getPasportInfo = request<IYandexPasportRequest, IYandexPasportResponse>(
  YANDEX_PASPORT,
  "get",
  ""
);
