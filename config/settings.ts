const _defaults = require("lodash/fp/defaults");

import { settingsEnv } from "./vars";

export const defaults = {
  baseDomain: "localhost",
  port: 5000,
  apiBaseUrl: "https://ya-praktikum.tech",
  apiBase: "/api/v2",
  publicPath: "/",
  /**
   * TODO: ключи нельзя хранить в репозитории
   */
  yandexOAuthClientId: "243f5d3b0fa04e5aa9b8ff6508db3a64", // За этим ключом не хочется каждый раз ходить в API
};

export const settings: typeof defaults = _defaults(defaults, settingsEnv);
