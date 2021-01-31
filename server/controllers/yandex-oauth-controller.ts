import { AxiosError } from "axios";
import { RequestHandler } from "express";

import { api } from "services/api";

export const yandexOAuthController: RequestHandler = (req, res) => {
  const { code } = req.query;

  if (code) {
    api
      .loginWithYandexOAuth({
        baseURL: "https://ya-praktikum.tech/api/v2",
        data: {
          code: code.toString(),
        },
        forwardSetCookieTo: res,
      })
      .then(() => {
        return res.redirect("/game");
      })
      .catch(({ message, response }: AxiosError) => {
        const error = response?.data ?? message;

        console.error(error);
      });
  }
};
