import { createProxyMiddleware } from "http-proxy-middleware";

export const apiProxy = createProxyMiddleware({
  target: "https://ya-praktikum.tech",
  changeOrigin: true,
  cookieDomainRewrite: "localhost",
});
