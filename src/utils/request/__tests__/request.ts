import { AxiosError } from "axios";

import { api } from "../__mocks__/api";
import { request } from "../request";

describe("request", () => {
  it("отправляет данные", async () => {
    const cb = jest.fn();
    const requestData = {
      foo: "buzz",
    };

    api.post("/endpoint", requestData).reply(200);

    await request("/endpoint")(requestData, cb);
    expect(cb).toBeCalled();
  });

  /**
   * Если использовать expect внутри коллбэка на успешный запрос,
   * функция request перехватит исключение, выброшенное Jest
   * и сработает коллбэк на обработку ошибки.
   * Для тестов лучше использовать мок-функции.
   */

  it("обрабатывает положительный ответ сервера", async () => {
    const cb = jest.fn();

    api.post("/endpoint").reply(200);

    await request("/endpoint")({}, cb);
    expect(cb).toBeCalled();
  });

  it("обрабатывает отрицательный ответ сервера", async () => {
    const cb = jest.fn();
    const errResponse = {
      reason: "Error",
    };
    const errCb = jest.fn(({ response }: AxiosError) => response?.data);

    api.post("/endpoint").reply(401, errResponse);

    await request("/endpoint")({}, cb, errCb);
    expect(errCb.mock.results[0].value).toEqual(errResponse);
  });
});
