import { baseUrl, port, isDevelopment } from "config/vars";

/**
 * TODO: ключи нельзя хранить в репозитории
 */
export const CLIENT_ID = "3bd97dc79c8a4398aecda914461a2c2a";
export const CLIENT_SECRET = "caee736bc0d2469f9ce683b424293f22";
const redirectUri = `${baseUrl}${isDevelopment && `:${port}`}`;
export const AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${redirectUri}`;
