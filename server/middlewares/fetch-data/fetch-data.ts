import { RequestHandler } from "express";

import { IUserResponse } from "services/api";
import { settings } from "config/settings";
import type { IUserData } from "store/auth/slice";
import type { IAuthSliceState } from "store/auth";
import { AxiosError, AxiosResponse } from "axios";
import axios from "helpers/configure-axios";

export const fetchData: RequestHandler = (req, res, next) => {
  const { cookies } = req;

  if (cookies.authCookie) {
    axios
      .get("/auth/user", {
        headers: {
          Cookie: req.headers.cookie,
        },
        forwardSetCookieTo: res,
      })
      .then(({ data }: AxiosResponse<IUserResponse>) => {
        const user = <IUserData>{
          firstName: data.first_name,
          secondName: data.second_name,
          displayName: data.display_name,
          login: data.login,
          email: data.email,
          phone: data.phone,
          avatar: data.avatar ? `${settings.apiBaseUrl}/${data.avatar}` : null,
        };
        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: true,
          user,
        };
      })
      .catch(({ message, response }: AxiosError) => {
        const error = response?.data?.reason ?? message;

        req.log.error(error);
        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: false,
          error,
        };
      })
      .finally(next);
  } else {
    next();
  }
};
