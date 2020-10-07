export class HUD {
  game;

  x;

  y;

  constructor(game: any) {
    this.game = game;
    this.x = 0;
    this.y = 0;
  }

  draw() {
    this.game.ctx.fillStyle = "#ffffff";
    this.game.ctx.font = "25px sans-serif";
    this.game.ctx.textBaseline = "top";
    this.game.ctx.fillText(this.game.score, this.x, this.y);
  }
}
