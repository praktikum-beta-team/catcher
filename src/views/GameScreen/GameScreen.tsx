import React, { FC, useEffect, useRef } from "react";

import { Game } from "services/game";
import { cn } from "helpers/classname";

import "./GameScreen.css";

const WIDTH = 320;
const HEIGHT = 480;

const cnGameScreen = cn("game-screen");

export const GameScreen: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let game: Game;
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      game = new Game(ctx);
      game.start();
    }

    return () => game && game.destroy();
  }, []);

  return (
    <div className={cnGameScreen()}>
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
    </div>
  );
};
