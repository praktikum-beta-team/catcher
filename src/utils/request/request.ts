import axios, { Method, AxiosResponse, AxiosError } from "axios";

import { BASE_URL } from "consts";

export function request<T>(rqUrl: string, method: Method = "POST") {
  return async (
    data: T,
    cb: (data: AxiosResponse) => void,
    errorCb?: (e: AxiosError) => void
  ): Promise<void | AxiosResponse> => {
    try {
      const res = await axios({
        method,
        url: `${BASE_URL}${rqUrl}`,
        data,
      });
      return cb(res);
    } catch (e) {
      return errorCb ? errorCb(e) : undefined;
    }
  };
}
