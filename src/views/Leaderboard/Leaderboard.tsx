import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { TEXT } from "constants/text";
import { cn } from "helpers/classname";
import { Button, Loading, Layout } from "components/UI";
import { Board } from "components/Board";
import { leaderboardOperations, leaderboardSelectors } from "store/leaderboard";

import { ROUTES } from "constants/routes";

import "./Leaderboard.css";

const b_ = cn("leaderboard");

const { getPending, getError, getLeaders } = leaderboardSelectors;

export const Leaderboard: FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const error = useSelector(getError);
  const entries = useSelector(getLeaders);

  useEffect(() => {
    dispatch(leaderboardOperations.fetchLeadersRequest());
  }, [dispatch]);

  return (
    <Layout>
      <div className={b_()}>
        <h1 className={b_("title")}>{TEXT.LEADERBOARD.TITLE}</h1>
        {pending && <Loading />}
        {!pending && error && TEXT.LEADERBOARD.ERROR}
        {!pending && !error && (
          <>
            {entries.length ? <Board entries={entries} /> : TEXT.LEADERBOARD.NO_LEADERS}
            <div className={b_("action")}>
              <Button view="action" container={<Link to={ROUTES.GAME} />}>
                {TEXT.LEADERBOARD.CALL_TO_ACTION[entries.length ? 0 : 1]}
              </Button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
