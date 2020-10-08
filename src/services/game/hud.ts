import type { Game } from "./game";

export class HUD {
  game;

  constructor(game: Game) {
    this.game = game;
  }

  draw() {
    const { ctx, score, lives } = this.game;
    const { width } = ctx.canvas;

    ctx.textBaseline = "top";

    ctx.font = "24px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "start";
    ctx.fillText(`${lives}`, 0, 0);

    ctx.font = "18px sans-serif";
    ctx.fillStyle = "grey";
    ctx.textAlign = "end";
    ctx.fillText(`${score}`, width, 0);
  }
}
