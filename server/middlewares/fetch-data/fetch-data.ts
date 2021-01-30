import { RequestHandler } from "express";

import { serialize } from "server/utils/cookie";
import { api } from "services/api";
import * as yandexOAuth from "services/yandex-oauth";
import { settings } from "config/settings";
import type { IUserData } from "store/auth/slice";
import type { IAuthSliceState } from "store/auth";

export const fetchData: RequestHandler = ({ cookies, session: { token } }, res, next) => {
  res.locals.auth = {};

  if (token) {
    yandexOAuth
      .fetchUserData(token)
      .then(({ data }) => {
        const user = <IUserData>{
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
  } else if (cookies.authCookie) {
    api
      .fetchUserData({
        baseURL: "https://ya-praktikum.tech/api/v2",
        headers: { Cookie: serialize(cookies) },
      })
      .then(({ data }) => {
        const user = <IUserData>{
          id: data.id,
          firstName: data.first_name,
          secondName: data.second_name,
          displayName: data.display_name,
          login: data.login,
          email: data.email,
          phone: data.phone,
          avatar: data.avatar && `${settings.apiBaseUrl}/${data.avatar}`,
        };
        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: true,
          user,
        };
        next();
      })
      .catch(({ response }) => {
        const setCookie = response?.headers["set-cookie"];

        if (setCookie) {
          res.setHeader("set-cookie", setCookie);
        }

        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: false,
        };

        next();
      });
  } else {
    next();
  }
};
