import axios, { Method, AxiosResponse, AxiosError } from "axios";

import { BASE_URL } from "constants/api";

export function request<
  T = Record<string, unknown>,
  R = Record<string, undefined>,
  E = Record<string, undefined>
>(reqUrl: string, method: Method = "POST") {
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
