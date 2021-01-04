import axios from "axios";
import type { AxiosRequestConfig } from "axios";

import { BASE_URL } from "app/constants/api";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
  method: "POST",
};

export const axiosWrapper = axios.create(axiosConfig);
