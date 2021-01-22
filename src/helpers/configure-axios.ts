import axios from "axios";
import type { AxiosRequestConfig } from "axios";

import { settings } from "config/settings";

const { apiBase } = settings;

const axiosConfig: AxiosRequestConfig = {
  baseURL: apiBase,
  withCredentials: true,
  method: "POST",
};

export default axios.create(axiosConfig);

export interface IRequestConfig<T = any> extends Omit<AxiosRequestConfig, "data"> {
  data?: T;
}
