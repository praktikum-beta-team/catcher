import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Loading, Button } from "components/UI";
import { api, LeaderboardResponse } from "services/api";
import { ROUTES } from "constants/routes";
import { TEXT } from "constants/text";
import { cn } from "helpers/classname";

import "./Leaderboard.css";

export const b_ = cn("leaderboard");

export const Leaderboard: FC = () => {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [entries, setEntries] = useState<LeaderboardResponse>([]);

  const fetchLeaderboard = () => {
    api
      .featchLeaders({
        data: {
          ratingFieldName: "score" as const,
          cursor: 0,
          limit: 10,
        },
      })
      .then(({ data }) => {
        setEntries(data);
        setPending(false);
      })
      .catch(({ message, response }) => {
        const errorMessage = response ? response.data.reason : message;

        console.error(errorMessage);
        setError(TEXT.LEADERBOARD.ERROR);
        setPending(false);
      });
  };

  useEffect(fetchLeaderboard, []);

  return (
    <>
      {pending && <Loading />}
      {!pending && !error && (
        <table className={b_()}>
          <thead className={b_("header")}>
            <tr>
              <th aria-label={TEXT.LEADERBOARD.PLACE} />
              <th className={b_("cell", { header: true })}>{TEXT.LEADERBOARD.PLAYER}</th>
              <th className={b_("cell", { header: true })}>{TEXT.LEADERBOARD.SCORE}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => {
              const {
                data: { name, score },
              } = entry;

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
      )}
      {!pending && error && <span className={b_("error")}>{error}</span>}
      <Button view="action" className={b_("action")} container={<Link to={ROUTES.GAME} />}>
        {TEXT.LEADERBOARD.CALL_TO_ACTION}
      </Button>
    </>
  );
};
