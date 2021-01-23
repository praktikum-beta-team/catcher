import { createProxyMiddleware } from "http-proxy-middleware";

import { settings } from "config/settings";

const { apiBaseUrl, baseDomain } = settings;

export const apiProxy = createProxyMiddleware({
  target: apiBaseUrl,
  changeOrigin: true,
  cookieDomainRewrite: baseDomain,
});
