import React, { FC } from "react";

import { Avatar } from "components";

interface IEntryProps {
  /**
   * Место в рейтинге
   */
  place: number;
  /**
   * Имя игрока
   */
  name: string;
  /**
   * Счет игрока
   */
  score: number;
}

export const Entry: FC<IEntryProps> = ({ place, name, score }) => (
  <tr>
    <td className="board__cell">{place}</td>
    <td className="board__cell">
      <Avatar size="s" />
    </td>
    <td className="board__cell">{name}</td>
    <td className="board__cell board__score">{score}</td>
  </tr>
);
