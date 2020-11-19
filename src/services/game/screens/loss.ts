import { TEXT } from "constants/text";
import type { Game } from "../game";

export class Loss {
  private game;

  constructor(game: Game) {
    this.game = game;
  }

  draw: FrameRequestCallback = () => {
    const { ctx, score } = this.game;
    const { width, height } = ctx.canvas;

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, width, height);

    ctx.textBaseline = "bottom";
    ctx.font = "28px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`${score}`, width / 2, height / 2);

    ctx.font = "14px sans-serif";
    ctx.fillText(TEXT.GAME.RESTART, width / 2, height - 20);
  };
}
