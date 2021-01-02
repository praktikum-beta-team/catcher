import { RequestHandler } from "express";
import axios, { AxiosError, AxiosResponse } from "axios";

import { serialize } from "server/utils/cookie";
import { IUser } from "app/types/models/user";
import { IUserResponse } from "app/services/api/auth";
import { IAuthSliceState } from "app/store/auth";

import type { IBadRequestError } from "app/utils/request/request";

export const fetchData: RequestHandler = ({ cookies }, res, next) => {
  if (!cookies.authCookie) return;

  axios
    .get("https://ya-praktikum.tech/api/v2/auth/user", {
      withCredentials: true,
      headers: { Cookie: serialize(cookies) },
    })
    .then(({ data }: AxiosResponse<IUserResponse>) => {
      const user = <IUser>{
        id: data.id,
        firstName: data.first_name,
        secondName: data.second_name,
        displayName: data.display_name,
        login: data.login,
        email: data.email,
        phone: data.phone,
        avatar: data.avatar,
      };
      res.locals.auth = <IAuthSliceState>{
        isAuthenticated: true,
        user,
      };
    })
    .catch(({ message, response }: AxiosError<IBadRequestError>) => {
      const setCookie = response?.headers["set-cookie"];

      if (setCookie) {
        res.setHeader("set-cookie", setCookie);
      }

      res.locals.auth = <IAuthSliceState>{
        isAuthenticated: false,
      };

      console.log(message);
    })
    .finally(next);
};
