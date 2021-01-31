import axios, { AxiosResponse } from "axios";
import type { AxiosRequestConfig } from "axios";
import { parse } from "set-cookie-parser";

import { settings } from "config/settings";
import { Response } from "express";

const { apiBase } = settings;

declare module "axios" {
  export interface AxiosRequestConfig {
    forwardSetCookieTo?: Response;
  }
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: apiBase,
  withCredentials: true,
  method: "POST",
};

const instance = axios.create(axiosConfig);

const forwardSetCookie = (response: AxiosResponse) => {
  const {
    config: { forwardSetCookieTo },
  } = response;
  const setCookie = response.headers["set-cookie"];

  if (setCookie) {
    const cookies = parse(setCookie);

    cookies.forEach(({ name, value, domain, sameSite, ...options }) => {
      forwardSetCookieTo?.cookie(name, value, options);
    });
  }

  return response;
};

instance.interceptors.response.use(forwardSetCookie);

export default instance;

export interface IRequestConfig<T = any> extends Omit<AxiosRequestConfig, "data"> {
  data?: T;
}
