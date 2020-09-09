import React, { FC, useState, useEffect } from "react";

import { cn } from "helpers/classname";
import { Header, Button, Loading } from "components/UI";
import { Board, BoardEntries } from "components/Board";

import "./Leaderboard.scss";
import mockData from "./mockData";

const TEXT = {
  TITLE: "Лучшие игроки",
  CALL_TO_ACTION: "Я могу больше!",
};

const cnLeaderboard = cn("leaderboard");

const loadEntries = (): Promise<BoardEntries> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1500);
  });

export const Leaderboard: FC = () => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<BoardEntries>([]);

  useEffect(() => {
    loadEntries().then((data) => {
      setEntries(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={cnLeaderboard()}>
        <div className={cnLeaderboard("inner")}>
          <h1 className={cnLeaderboard("title")}>{TEXT.TITLE}</h1>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Board entries={entries} />
              <Button view="action">{TEXT.CALL_TO_ACTION}</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
