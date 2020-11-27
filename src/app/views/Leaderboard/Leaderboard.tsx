import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { TEXT } from "app/constants/text";
import { cn } from "app/helpers/classname";
import { Button, Loading, Layout } from "app/components/UI";
import { Board } from "app/components/Board";
import type { IBoardEntry } from "app/components/Board";

import { ROUTES } from "app/constants/routes";

import _mockData from "./mockData.json";
import "./Leaderboard.css";

const mockData = _mockData;
const b_ = cn("leaderboard");

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
    /**
     * Пока апи не работает, компонент выводит мок-данные
     */

    loadEntries().then((data) => {
      setEntries(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <div className={b_()}>
        <h1 className={b_("title")}>{TEXT.LEADERBOARD.TITLE}</h1>
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
