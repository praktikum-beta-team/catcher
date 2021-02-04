import { settings } from "config/settings";
import { environment } from "config/vars";
import { ROUTES } from "constants/routes";

const { baseDomain, port, yandexOAuthServiceId } = settings;

const redirectUri = `https://${baseDomain}${environment === "development" ? `:${port}` : ""}${
  ROUTES.OAUTH
}`;

export const AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${yandexOAuthServiceId}&redirect_uri=${redirectUri}`;
