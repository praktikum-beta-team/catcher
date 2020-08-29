import React, { FC } from "react";

import { Header, Button } from "components";
import { Entry } from "./Entry";

import "./Leaderboard.scss";
import mockData from "./mockData";

export const Leaderboard: FC = () => {
  const boardEntries = mockData.map((entry, index) => (
    <Entry key={index} place={index + 1} {...entry} />
  ));

  return (
    <>
      <Header />
      <div className="leaderboard">
        <div className="leaderboard__wrapper">
          <div className="leaderboard__inner">
            <h1 className="leaderboard__title">Лучшие игроки</h1>
            <table className="board">
              <thead className="board__header">
                <tr>
                  <th></th>
                  <th className="board__cell board__column-title" colSpan={2}>
                    Игрок
                  </th>
                  <th className="board__cell board__column-title">Счет</th>
                </tr>
              </thead>
              <tbody>{boardEntries}</tbody>
            </table>
            <Button view="action">Я могу больше!</Button>
          </div>
        </div>
      </div>
    </>
  );
};
