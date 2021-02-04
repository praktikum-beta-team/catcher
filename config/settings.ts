const _defaults = require("lodash/fp/defaults");

import { settingsEnv } from "./vars";
import { service_id as yandexOAuthServiceId } from "./yandex-oauth-service-id.json";

export const defaults = {
  baseDomain: "localhost",
  port: 5000,
  apiBaseUrl: "https://ya-praktikum.tech",
  apiBase: "/api/v2",
  publicPath: "/",
  yandexOAuthServiceId,
};

export const settings: typeof defaults = _defaults(defaults, settingsEnv);
