import type { Game } from "./game";

export class HUD {
  private game;

  constructor(game: Game) {
    this.game = game;
  }

  draw() {
    const { ctx, score, lives } = this.game;
    const { width } = ctx.canvas;

    ctx.textBaseline = "top";
    ctx.font = "18px sans-serif";

    ctx.fillStyle = "red";
    ctx.textAlign = "start";
    ctx.fillText("❤".repeat(lives), 0, 0);

    ctx.fillStyle = "grey";
    ctx.textAlign = "end";
    ctx.fillText(`${score}`, width, 0);
  }
}
