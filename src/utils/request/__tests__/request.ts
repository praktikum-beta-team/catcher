import type { AxiosError, AxiosResponse } from "axios";

import { api } from "../__mocks__/api";
import { request } from "../request";

describe("request", () => {
  /**
   * Если использовать expect внутри коллбэка на успешный запрос,
   * функция request перехватит исключение, выброшенное Jest
   * и сработает коллбэк на обработку ошибки.
   * Для тестов лучше использовать мок-функции.
   */

  it("отправляет данные и обрабатывает положительный ответ", async () => {
    const requestData = { foo: "buzz" };
    const responseData = { buzz: "bar" };
    const cb = jest.fn((response: AxiosResponse) => response.data);

    api.post("/endpoint", requestData).reply(200, responseData);

    await request<typeof requestData>("/endpoint")(requestData, cb);
    expect(cb.mock.results[0].value).toEqual(responseData);
  });

  it("обрабатывает отрицательный ответ сервера", async () => {
    const cb = jest.fn();
    const errResponse = {
      reason: "Error",
    };
    const errCb = jest.fn(({ response }: AxiosError) => response?.data);

    api.post("/endpoint").reply(401, errResponse);

    await request("/endpoint")(null, cb, errCb);
    expect(errCb.mock.results[0].value).toEqual(errResponse);
  });
});
