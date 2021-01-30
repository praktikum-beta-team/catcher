import { createProxyMiddleware } from "http-proxy-middleware";

import { settings } from "config/settings";

const { apiBaseUrl, apiBase, baseDomain } = settings;

/**
 * Проксировать запросы к бэку необходимо,
 * чтобы возвращающиеся в ответе куки устанавливались на домен приложения.
 * Это позволяет в дальнейшем получить их на фронтбэке
 * (чтобы использовать в запросах к API).
 */

export const apiProxy = createProxyMiddleware(apiBase, {
  target: apiBaseUrl,
  changeOrigin: true,
  cookieDomainRewrite: baseDomain,
});
