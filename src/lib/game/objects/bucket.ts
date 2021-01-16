import { loadImage } from "helpers/load-image";
import type { IGameObject, Sprite } from "../types";

import BucketSprite from "../assets/sprites/bucket.svg";

const SPEED = 4;

export class Bucket implements IGameObject {
  private ctx;

  x = 0;

  y;

  height = 76;

  width = 136;

  sprites: Record<string, Sprite> = {
    bucket: null,
  };

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.y = ctx.canvas.height - this.height;
    this.load = this.load.bind(this);
  }

  async load() {
    this.sprites.bucket = await loadImage(BucketSprite);
  }

  draw() {
    const { ctx, width, height, sprites } = this;

    if (sprites.bucket) {
      ctx.drawImage(<HTMLImageElement>sprites.bucket, this.x, this.y, width, height);
    }
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
