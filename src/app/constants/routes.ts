import { YANDEX } from "./oAuth";

export const ROUTES = {
  SIGNIN: "/login",
  SIGNUP: "/signup",
  LOGOUT: "/logout",
  SETTINGS: "/settings",
  GAME: "/game",
  LEADERBOARD: "/leaderboard",
  NOT_FOUND: "/404",
  OAUTH: "/OAUTH",
  OAUTH_YANDEX: `https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX.CLIENT_ID}&redirect_uri=http://localhost:3001/oAuth`,
};
