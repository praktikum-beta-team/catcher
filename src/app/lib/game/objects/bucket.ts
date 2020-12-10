import type { IGameObject } from "../types";

const SPEED = 4;

export class Bucket implements IGameObject {
  private ctx;

  x = 0;

  y;

  height = 20;

  width = 50;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.y = ctx.canvas.height - this.height;
  }

  draw(): void {
    const { ctx, width, height } = this;

    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, width, height);
  }

  move(position: { direction?: "left" | "right"; dx?: number }): void {
    const { direction, dx = 0 } = position;
    const { ctx, width } = this;
    const { width: canvasWidth } = ctx.canvas;
    const ddx = dx === 0 ? 1 : Math.abs(dx);
    if ((direction === "left" || dx < 0) && this.x > 0) {
      this.x -= ddx * SPEED;
    } else if ((position.direction === "right" || dx > 0) && this.x < canvasWidth - width) {
      this.x += ddx * SPEED;
    }
  }
}
