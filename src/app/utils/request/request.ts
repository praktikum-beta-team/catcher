import axios, { Method, AxiosResponse, AxiosError } from "axios";
import qs from "qs";

import { BASE_URL } from "app/constants/api";
import { IErrorResponse } from "./types/error";

export function request<T = null, R = Record<string, unknown>, E = IErrorResponse>(
  endpoint: string,
  method: Method = "post",
  reqBaseURL = BASE_URL,
  stringify = false
) {
  return async (
    data: T,
    cb: (response: AxiosResponse<R>) => void,
    errorCb?: (e: AxiosError<E>) => void,
    headers?: Record<string, string>
  ): Promise<void> => {
    try {
      const res = await axios({
        data: stringify ? qs.stringify(data) : data,
        method,
        url: endpoint,
        baseURL: reqBaseURL,
        headers: {
          ...headers,
        },
        withCredentials: true,
      });
      return cb(res);
    } catch (e) {
      return errorCb ? errorCb(e) : undefined;
    }
  };
}
