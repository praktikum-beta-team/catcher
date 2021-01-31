import type { ILeaderboardEntry } from "types/models";

export interface ISignupRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ISigninRequest {
  login: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar?: string;
}

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

export interface ILeaderboardRequest {
  /**
   * Поле, по которому сортируются результаты
   */
  ratingFieldName: keyof ILeaderboardEntry;
  /**
   * Используется для пагинации
   */
  cursor: number;
  /**
   * Количество возвращаемых записей
   */
  limit: number;
}

export type LeaderboardResponse = {
  data: ILeaderboardEntry;
}[];

export interface ILeaderboardNewLeaderRequest {
  data: ILeaderboardEntry;
  /**
   * Поле, по которому сортируются результаты
   */
  ratingFieldName: keyof ILeaderboardEntry;
}

export interface IYandexPasportResponse {
  id: number;
  login: string;
  first_name: string;
  last_name: string;
  real_name: string;
  default_email: string;
  default_avatar_id: string;
}

export interface IYandexOAuthLoginRequest {
  code: string;
}
