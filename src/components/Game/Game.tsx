import React, { FC, useEffect, useRef } from "react";

import { Game as _Game } from "lib/game";
import { HEIGHT, WIDTH } from "constants/game";
import { cn } from "helpers/classname";

import "./Game.css";

const b_ = cn("game");

export const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let game: _Game;
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      game = new _Game(ctx);
      const { load, start } = game;

      load().then(start);
    }

    return () => game && game.destroy();
  }, []);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className={b_()} />;
};
