export interface IUserRequest {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  /**
   * Следующих полей в сваггере нет, но апи возвращает ошибки по ним
   * https://ya-praktikum.tech/api/v2/swagger/swagger.json#/Users/put_user_profile
   */
  phone: string;
}

export interface IUserError {
  error: string;
  reason: string;
}
