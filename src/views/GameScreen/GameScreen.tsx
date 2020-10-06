import React, { FC, useEffect, useRef } from "react";

import { Game } from 'services/game'
import { cn } from "helpers/classname";

import "./GameScreen.css";

const b_ = cn("game-screen");

export const GameScreen: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')

    if (ctx) {
      const game = new Game(ctx)
      game.render()
    }

    return () => {
      console.log('unmount')
    }
  }, [])
  
  return (
      <div className={b_()}>
        <canvas ref={canvasRef} width={320} height={480} />
      </div>
    );
};
