import { RequestHandler } from "express";

import { getToken } from "services/yandex-oauth";

export const yandexOAuthController: RequestHandler = (req, res, next) => {
  const { code, error_description } = req.query;

  if (!code) {
    res.locals.auth.error = error_description || "Ошибка авторизации";
    next();
  } else {
    getToken(code.toString())
      .then(({ data: { access_token } }) => {
        req.session.token = access_token;
      })
      /**
       * TODO: возвращать ошибку
       */
      .finally(next);
  }
};
