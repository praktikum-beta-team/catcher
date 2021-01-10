import React, { FC, useCallback, useEffect, useRef } from "react";

import { Game as _Game } from "lib/game";
import { cn } from "helpers/classname";

import "./Game.css";
import { api } from "services/api";
import { useSelector } from "react-redux";
import { getUser } from "store/auth/selectors";

const b_ = cn("game");

export const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const user = useSelector(getUser);

  const addToLeaderboard = useCallback(() => {
    if (user) {
      const { firstName, displayName } = user;

      return (score: number) => {
        api.addUserToLeaderboard({
          data: {
            data: {
              name: displayName ?? firstName,
              score,
            },
            ratingFieldName: "score",
          },
        });
      };
    }

    return undefined;
  }, [user]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      const game = new _Game(ctx, addToLeaderboard());
      const { load, start, destroy } = game;

      load().then(start);

      return destroy;
    }

    return undefined;
  }, [addToLeaderboard]);

  return <canvas ref={canvasRef} className={b_()} />;
};
