import React, { FC } from "react";

import { cn } from "helpers/classname";
import { BoardEntry as Entry, IBoardEntryProps } from "./Entry";

import "./Board.scss";

const TEXT = {
  PLAYER: "Игрок",
  SCORE: "Счет",
};

export type BoardEntries = Omit<IBoardEntryProps, "place">[];

interface IBoardProps {
  entries: BoardEntries;
}

export const cnBoard = cn("board");

const renderEntries = (entries: BoardEntries) =>
  entries
    /**
     * TODO: продумать сортировку и вывод результатов:
     * разные игроки могут набрать одинаковое количество очков
     * и занять одно место
     */
    .sort((a, b) => b.score - a.score)
    .map((entry, index) => <Entry key={index} place={index + 1} {...entry} />);

export const Board: FC<IBoardProps> = (props) => {
  const { entries } = props;

  return (
    <table className={cnBoard()}>
      <thead className={cnBoard("header")}>
        <tr>
          <th></th>
          <th className={cnBoard("cell", { header: true })} colSpan={2}>
            {TEXT.PLAYER}
          </th>
          <th className={cnBoard("cell", { header: true })}>{TEXT.SCORE}</th>
        </tr>
      </thead>
      <tbody>{renderEntries(entries)}</tbody>
    </table>
  );
};
