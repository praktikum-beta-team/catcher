import { loadImage } from "helpers/load-image";
import type { IGameObject, Sprite } from "../types";

import BucketSprite from "../assets/sprites/bucket.svg";

const SPEED = 6;

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

  move(movement: "left" | "right" | boolean | number = false) {
    const { ctx, width } = this;
    const { width: canvasWidth } = ctx.canvas;
    const offset = canvasWidth - width;
    let movementX = this.x;

    switch (movement) {
      case true:
      case "left":
        movementX -= SPEED;
        break;
      case false:
      case "right":
        movementX += SPEED;
        break;
      default:
        movementX += movement;
    }

    if (movementX > offset) movementX = offset;
    if (movementX < 0) movementX = 0;

    this.x = movementX;
  }
}
