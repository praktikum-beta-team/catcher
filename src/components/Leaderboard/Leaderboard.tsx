import React, { FC, useState, useEffect } from "react";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Button, Loading, Layout } from "components/UI";
import { Board } from "components/Board";
import type { IBoardEntry } from "components/Board/Entry";

import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
import mockData from "./mockData";

import "./Leaderboard.css";

const cnLeaderboard = cn("leaderboard");

const loadEntries = (): Promise<IBoardEntry[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1500);
  });

export const Leaderboard: FC = () => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<IBoardEntry[]>([]);

  useEffect(() => {
    loadEntries().then((data) => {
      setEntries(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <div className={cnLeaderboard()}>
        <h1 className={cnLeaderboard("title")}>{TEXT.LEADERBOARD.TITLE}</h1>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Board entries={entries} />
            <Button view="action" container={<Link to={ROUTES.GAME} />}>
              {TEXT.LEADERBOARD.CALL_TO_ACTION}
            </Button>
          </>
        )}
      </div>
    </Layout>
  );
};
