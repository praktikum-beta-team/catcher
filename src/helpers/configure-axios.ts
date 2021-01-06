import axios from "axios";
import type { AxiosRequestConfig } from "axios";

import { baseURL } from "constants/api";

const axiosConfig: AxiosRequestConfig = {
  baseURL,
  withCredentials: true,
  method: "POST",
};

export default axios.create(axiosConfig);

export type IRequestConfig<T = any> = Partial<AxiosRequestConfig> & {
  data: T;
};
