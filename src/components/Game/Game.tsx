import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Game as _Game, GameEvent } from "lib/game";
import { api } from "services/api";
import { getUser } from "store/auth/selectors";
import { cn } from "helpers/classname";

import "./Game.css";

const b_ = cn("game");

const addUserToLeaderboard = (name: string) => (score: number) => {
  api.addUserToLeaderboard({
    data: {
      data: {
        name,
        score,
      },
      ratingFieldName: "score",
    },
  });
};

export const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const user = useSelector(getUser);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      const game = new _Game(ctx);
      const {
        load,
        start,
        destroy,
        events: { on },
      } = game;

      if (user) {
        const { firstName, displayName } = user;

        on(GameEvent.GameOver, addUserToLeaderboard(displayName ?? firstName));
      }

      load().then(start);

      return destroy;
    }

    return undefined;
  }, [user]);

  return <canvas ref={canvasRef} className={b_()} />;
};
