import type { ILeaderboardEntry } from "app/types/models";

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

export interface ILeaderboardNewLeaderRequest {
  data: ILeaderboardEntry;
  /**
   * Поле, по которому сортируются результаты
   */
  ratingFieldName: keyof ILeaderboardEntry;
}
