import axios, { Method, AxiosResponse, AxiosError } from "axios";

import { BASE_URL } from "constants/api";

export function request<T, R = any, E = any>(reqUrl: string, method: Method = "POST") {
  return async (
    data: T,
    cb: (data: AxiosResponse<R>) => void,
    errorCb?: (e: AxiosError<E>) => void
  ): Promise<void | AxiosResponse> => {
    try {
      const res = await axios({
        data,
        method,
        url: reqUrl,
        baseURL: BASE_URL,
        withCredentials: true,
      });
      return cb(res);
    } catch (e) {
      return errorCb ? errorCb(e) : undefined;
    }
  };
}
