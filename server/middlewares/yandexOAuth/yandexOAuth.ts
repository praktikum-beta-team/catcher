import { RequestHandler } from "express";

import { getPasportInfo, getToken } from "services/yandexOAuth";

import { IUser } from "types/models/user";
import { IAuthSliceState } from "store/auth";

export const yandexOAuth: RequestHandler = async (req, res, next) => {
  const { code, error_description } = req.query;

  res.locals.auth = {};

  if (!code) {
    res.locals.auth.error = error_description || "Ошибка авторизации";
    next();
  } else {
    getToken(code.toString()) /** TODO: тут можно использовать toString? */
      .then(({ data }) => getPasportInfo(data))
      .then(({ data }) => {
        const user = <IUser>{
          firstName: data.first_name,
          secondName: data.last_name,
          displayName: data.real_name,
          login: data.login,
          email: data.default_email,
          /**
           * TODO: Может быть получится получить реальный аватар пользователя?
           */
          avatar: `https://avatars.yandex.net/get-yapic/${data.default_avatar_id}/islands-50`,
        };

        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: true,
          user,
        };
      })
      .catch(({ message, response }) => {
        const errorMessage = response ? response.data.error_description : message;

        console.error(errorMessage);

        res.locals.auth = <IAuthSliceState>{
          isAuthenticated: false,
        };
      })
      .finally(next);
  }
};
