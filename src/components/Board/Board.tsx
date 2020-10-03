import React, { FC } from "react";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Avatar } from "components/UI";

import "./Board.css";

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

interface IBoardProps {
  entries: IBoardEntry[];
}

export const cnBoard = cn("board");

const renderEntries = (entries: IBoardEntry[]) =>
  entries
    /**
     * TODO: продумать сортировку и вывод результатов:
     * разные игроки могут набрать одинаковое количество очков
     * и занять одно место
     */
    .sort((a, b) => b.score - a.score)
    .map((entry, place) => {
      const { avatar, name, score } = entry;

      return (
        <tr key={place}>
          <td className={cnBoard("cell")}>{place + 1}</td>
          <td className={cnBoard("cell")}>
            <Avatar size="s" src={avatar} />
          </td>
          <td className={cnBoard("cell")}>{name}</td>
          <td className={cnBoard("cell", { score: true })}>{score}</td>
        </tr>
      );
    });

export const Board: FC<IBoardProps> = (props) => {
  const { entries } = props;

  return (
    <table className={cnBoard()}>
      <thead className={cnBoard("header")}>
        <tr>
          <th></th>
          <th className={cnBoard("cell", { header: true })} colSpan={2}>
            {TEXT.LEADERBOARD.PLAYER}
          </th>
          <th className={cnBoard("cell", { header: true })}>{TEXT.LEADERBOARD.SCORE}</th>
        </tr>
      </thead>
      <tbody>{renderEntries(entries)}</tbody>
    </table>
  );
};
