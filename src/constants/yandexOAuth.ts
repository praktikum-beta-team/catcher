import { settings } from "config/settings";
import { environment } from "config/vars";
import { ROUTES } from "constants/routes";

const { baseDomain, port, yandexOAuthClientId } = settings;

const redirectUri = `https://${baseDomain}${environment === "development" ? `:${port}` : ""}${
  ROUTES.OAUTH
}`;

export const AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${yandexOAuthClientId}&redirect_uri=${redirectUri}`;
