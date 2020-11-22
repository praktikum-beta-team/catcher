import React, { FC } from "react";

import { TEXT } from "app/constants/text";
import { cn } from "app/helpers/classname";
import { Avatar } from "app/components/UI";

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

export const b_ = cn("board");

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
        <tr key={name}>
          <td className={b_("cell")}>{place + 1}</td>
          <td className={b_("cell")}>
            <Avatar size="s" src={avatar} />
          </td>
          <td className={b_("cell")}>{name}</td>
          <td className={b_("cell", { score: true })}>{score}</td>
        </tr>
      );
    });

export const Board: FC<IBoardProps> = (props) => {
  const { entries } = props;

  return (
    <table className={b_()}>
      <thead className={b_("header")}>
        <tr>
          <th aria-label={TEXT.LEADERBOARD.PLACE} />
          <th className={b_("cell", { header: true })} colSpan={2}>
            {TEXT.LEADERBOARD.PLAYER}
          </th>
          <th className={b_("cell", { header: true })}>{TEXT.LEADERBOARD.SCORE}</th>
        </tr>
      </thead>
      <tbody>{renderEntries(entries)}</tbody>
    </table>
  );
};
