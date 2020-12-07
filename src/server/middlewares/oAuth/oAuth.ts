import { RequestHandler } from "express";

import { yandex } from "app/utils/request";
import { YANDEX } from "app/constants/oAuth";

import type { IUserResponse } from "app/utils/request/types";

const getPasportInfoYandex = async (token: string) => {
  return new Promise<IUserResponse>((resolve, reject) => {
    yandex.getPasportInfo(
      {
        format: "json",
      },
      ({ data }) => {
        resolve({
          id: data.id,
          first_name: data.first_name,
          second_name: data.last_name,
          display_name: data.real_name,
          login: data.login,
          email: data.default_email,
          avatar: `https://avatars.yandex.net/get-yapic/${data.default_avatar_id}/islands-50`,
        });
      },
      ({ message, response }) => {
        reject(response ? response.statusText : message);
      },
      {
        Authorization: `OAuth ${token}`,
      }
    );
  });
};

const getTokenYandex = async (code: string) => {
  return new Promise<string>((resolve, reject) => {
    yandex.getToken(
      {
        grant_type: "authorization_code",
        code,
        client_id: YANDEX.CLIENT_ID,
        client_secret: YANDEX.CLIENT_SECRET,
      },
      ({ data }) => {
        resolve(data.access_token);
      },
      (e) => {
        reject(e.response?.data?.error_description || "Ошибка авторизации");
      }
    );
  });
};

export const oAuthYandex: RequestHandler = async (req, res, next) => {
  const { code, error_description } = req.query;
  res.locals.auth = {};
  if (!code) {
    res.locals.auth.error = error_description || "Ошибка авторизации";
  } else {
    try {
      const yaToken = await getTokenYandex(code.toString());
      const user = await getPasportInfoYandex(yaToken);
      res.locals.auth = {
        isAuthenticated: true,
        yaToken,
        user,
      };
    } catch (e) {
      res.locals.auth.error = e || "Ошибка авторизации";
    }
  }
  next();
};
