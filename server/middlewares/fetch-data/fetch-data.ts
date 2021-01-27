import { RequestHandler } from "express";

import { serialize } from "server/utils/cookie";
import { api } from "services/api";
import { settings } from "config/settings";
import type { IUserData } from "store/auth/slice";
import type { IAuthSliceState } from "store/auth";

export const fetchData: RequestHandler = ({ cookies }, res, next) => {
  if (!cookies.authCookie) {
    next();
  } else {
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
  }
};
