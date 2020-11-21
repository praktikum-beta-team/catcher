import axios, { Method, AxiosResponse, AxiosError } from "axios";

import { BASE_URL } from "constants/api";
import { IErrorResponse } from "./types/error";

export function request<T = null, R = Record<string, unknown>, E = IErrorResponse>(
  endpoint: string,
  method: Method = "POST"
) {
  return async (
    data: T,
    cb: (response: AxiosResponse<R>) => void,
    errorCb?: (e: AxiosError<E>) => void
  ): Promise<void | AxiosResponse> => {
    try {
      const res = await axios({
        data,
        method,
        url: endpoint,
        baseURL: BASE_URL,
        withCredentials: true,
      });
      return cb(res);
    } catch (e) {
      return errorCb ? errorCb(e) : undefined;
    }
  };
}
