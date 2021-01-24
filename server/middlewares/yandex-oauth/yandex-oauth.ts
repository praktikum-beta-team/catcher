import { RequestHandler } from "express";

import { fetchUserData, getToken } from "services/yandex-oauth";

import { IUser } from "types/models/user";
import { IAuthSliceState } from "store/auth";

export const yandexOAuth: RequestHandler = async (req, res, next) => {
  const { code, error_description } = req.query;

  res.locals.auth = {};

  if (!code) {
    res.locals.auth.error = error_description || "Ошибка авторизации";
    next();
  } else {
    const {
      data: { access_token: yandexOAuthToken },
    } = await getToken(code.toString());

    /**
     * TODO: установить куку с токеном Яндекс.OAuth
     */

    fetchUserData(yandexOAuthToken)
      .then(({ data }) => {
        const user = <IUser>{
          firstName: data.first_name,
          secondName: data.last_name,
          displayName: data.real_name,
          login: data.login,
          email: data.default_email,
          avatar: {
            base: `https://avatars.yandex.net/get-yapic/${data.default_avatar_id}/islands-`,
            s: "50",
            m: "100",
            xl: "200",
          },
        };

        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: true,
          user,
        };
      })
      .catch(({ message, response, statusText }) => {
        const errorMessage =
          response?.data?.error_description || message || statusText || "ошибка авторизации";
        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: false,
          error: errorMessage,
        };
      })
      .finally(next);
  }
};
