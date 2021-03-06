import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Loading, Button } from "components/UI";
import { api, LeaderboardResponse } from "services/api";
import { ROUTES } from "constants/routes";
import { TEXT } from "constants/text";
import { cn } from "helpers/classname";

import "./Leaderboard.css";

const b_ = cn("leaderboard");

export const Leaderboard: FC = () => {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);
  const [entries, setEntries] = useState<LeaderboardResponse>([]);

  const fetchLeaderboard = () => {
    const signal = axios.CancelToken.source();

    api
      .featchLeaders({
        data: {
          ratingFieldName: "score" as const,
          cursor: 0,
          limit: 10,
        },
        cancelToken: signal.token,
      })
      .then(({ data }) => {
        setEntries(data);
        setPending(false);
      })
      .catch(({ message, response }) => {
        const errorMessage = response ? response.data.reason : message;

        console.error(errorMessage);
        setError(true);
        setPending(false);
      });

    return signal.cancel;
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
      {error && <span className={b_("error")}>{TEXT.LEADERBOARD.ERROR}</span>}
      <Button view="action" className={b_("action")} container={<Link to={ROUTES.GAME} />}>
        {TEXT.LEADERBOARD.CALL_TO_ACTION}
      </Button>
    </>
  );
};
