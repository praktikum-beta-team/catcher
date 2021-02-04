import { AxiosError } from "axios";
import { RequestHandler } from "express";

import { api } from "services/api";

export const yandexOAuthController: RequestHandler = (req, res) => {
  const { code } = req.query;

  if (code) {
    api
      .loginWithYandexOAuth({
        data: {
          code: code.toString(),
        },
        forwardSetCookieTo: res,
      })
      .then(() => {
        return res.redirect("/game");
      })
      .catch(({ message, response }: AxiosError) => {
        const error = response?.data?.reason ?? message;

        req.log.error(error);
      });
  }
};
