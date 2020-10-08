import type { IGameObject } from "../types";

const SPEED = 4;

export class Bucket implements IGameObject {
  ctx;

  x = 0;

  y;

  height = 20;

  width = 50;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.y = ctx.canvas.height - this.height;
  }

  draw() {
    const { ctx, width, height } = this;

    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, width, height);
  }

  move(left = false) {
    const { ctx, width } = this;
    const { width: canvasWidth } = ctx.canvas;

    if (left && this.x > 0) {
      this.x -= SPEED;
    } else if (this.x < canvasWidth - width) {
      this.x += SPEED;
    }
  }
}
