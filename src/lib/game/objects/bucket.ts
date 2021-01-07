import { loadImage } from "helpers/load-image";
import type { IGameObject } from "../types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Texture = require("../textures/bucket.svg");

const SPEED = 4;

export class Bucket implements IGameObject {
  private ctx;

  x = 0;

  y;

  height = 56;

  width = 100;

  textures = {
    bucket: new Image(),
  };

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.y = ctx.canvas.height - this.height;
    this.load = this.load.bind(this);
  }

  async load() {
    this.textures.bucket.src = await loadImage(Texture);
  }

  draw() {
    const { ctx, width, height } = this;

    ctx.drawImage(this.textures.bucket, this.x, this.y, width, height);
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
