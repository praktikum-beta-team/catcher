import React, { FC } from "react";

import { Avatar } from "components/UI";
import { cnBoard } from "components/Board";

export interface IBoardEntry {
  /**
   * Имя игрока
   */
  name: string;
  /**
   * Ссылка на аватар
   */
  avatar?: string | null;
  /**
   * Счет игрока
   */
  score: number;
}

export interface IBoardEntryProps extends IBoardEntry {
  /**
   * Место в рейтинге
   */
  place: number;
}

export const BoardEntry: FC<IBoardEntryProps> = (props) => {
  const { place, avatar, name, score } = props;

  return (
    <tr>
      <td className={cnBoard("cell")}>{place}</td>
      <td className={cnBoard("cell")}>
        <Avatar size="s" src={avatar} />
      </td>
      <td className={cnBoard("cell")}>{name}</td>
      <td className={cnBoard("cell", { score: true })}>{score}</td>
    </tr>
  );
};
