export const DEFAULT_SETTINGS = {
  BASE_URL: "https://localhost",
  PORT: 3001,
};

const baseUrl = process.env.BASE_URL ?? DEFAULT_SETTINGS.BASE_URL;
const port = process.env.PORT ?? DEFAULT_SETTINGS.PORT;

const environment = process.env.NODE_ENV ?? "development";
const isDevelopment = environment === "development";

const apiBaseUrl = "https://ya-praktikum.tech";

export { isDevelopment, baseUrl, port, apiBaseUrl };
