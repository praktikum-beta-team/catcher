import pino from "pino";
import pinoHttp from "pino-http";
import type { RequestHandler } from "express";

const _logger = pino({
  prettyPrint: true,
});

export const logger: RequestHandler = (req, res, next) => {
  _logger.info({
    method: req.method,
    url: req.url,
  });

  return next();
};
