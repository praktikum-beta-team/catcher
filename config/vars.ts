export const environment = process.env.NODE_ENV || "development";

export const settingsEnv = {
  baseDomain: process.env.BASE_DOMAIN,
  port: process.env.PORT,
  publicPath: process.env.PUBLIC_PATH,
  ...(environment === "test"
    ? {
        apiBase: "https://ya-praktikum.tech/api/v2",
      }
    : {}),
};
