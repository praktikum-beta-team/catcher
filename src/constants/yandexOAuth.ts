import { settings, yandexOAuthSettings } from "config/settings";
import { environment } from "config/vars";
import { ROUTES } from "constants/routes";

const { baseDomain, port } = settings;
const { clientId } = yandexOAuthSettings;

const redirectUriPort = environment === "development" ? `:${port}` : "";
const redirectUri = `https://${baseDomain}${redirectUriPort}${ROUTES.OAUTH}`;

export const AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
