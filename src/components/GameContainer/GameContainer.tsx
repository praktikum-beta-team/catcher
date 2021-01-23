import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Game, GameEvent } from "lib/game";
import { api } from "services/api";
import { getUser } from "store/auth/selectors";
import { cn } from "helpers/classname";

import "./GameContainer.css";

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

export const GameContainer: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const user = useSelector(getUser);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      const game = new Game(ctx);
      const {
        load,
        start,
        destroy,
        events: { on },
      } = game;

      if (user) {
        on(GameEvent.GameOver, addUserToLeaderboard(user.displayName));
      }

      load().then(start);

      return destroy;
    }

    return undefined;
  }, [user]);

  return <canvas ref={canvasRef} className={b_()} />;
};
