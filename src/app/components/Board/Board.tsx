import React, { FC } from "react";

import { TEXT } from "app/constants/text";
import { cn } from "app/helpers/classname";
import type { ILeaderboardEntry } from "app/types/models";

import "./Board.css";

interface IBoardProps {
  entries: ILeaderboardEntry[];
}

export const b_ = cn("board");

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
      <tbody>
        {entries.map((entry, index) => {
          const { name, score } = entry;

          return (
            <tr key={name}>
              <td className={b_("cell")}>{index + 1}</td>
              <td className={b_("cell")}>{name}</td>
              <td className={b_("cell", { score: true })}>{score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
