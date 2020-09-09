import axios, { Method, AxiosResponse, AxiosError } from "axios";

import { BASE_URL } from "consts";

export function request<T>(reqUrl: string, method: Method = "POST") {
  return async (
    data: T,
    cb: (data: AxiosResponse) => void,
    errorCb?: (e: AxiosError) => void
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
