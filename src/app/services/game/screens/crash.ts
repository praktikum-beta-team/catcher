import { TEXT } from "app/constants/text";

export class Crash {
  private ctx;

  private error = TEXT.GAME.ERROR;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  draw: FrameRequestCallback = () => {
    const { ctx, error } = this;
    const { height, width } = ctx.canvas;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "black";
    ctx.textAlign = "start";
    ctx.textBaseline = "top";
    ctx.font = "14px sans-serif";
    ctx.fillText(error, 10, 10);
  };
}
