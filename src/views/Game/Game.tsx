import React, { FC, useEffect, useRef } from "react";

import { Game } from "lib/game";
import { Layout, Layout__Body } from "components/UI";

const WIDTH = 320;
const HEIGHT = 480;

export const GameView: FC = () => {
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
    <Layout>
      <Layout__Body>
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
      </Layout__Body>
    </Layout>
  );
};
