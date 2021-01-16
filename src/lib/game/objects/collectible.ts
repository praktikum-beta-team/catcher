import type { IGameObject, Sprite } from "../types";

export interface ICollectibleParams {
  speed?: number;
  isDangerous?: boolean;
}

const SPEED = 4;

export class Collectible implements IGameObject {
  private ctx;

  x;

  y = 0;

  height = 32;

  width = 32;

  speed;

  isDangerous;

  sprites: Record<string, Sprite> = {
    collectible: null,
  };

  constructor(ctx: CanvasRenderingContext2D, { isDangerous, speed }: ICollectibleParams = {}) {
    this.ctx = ctx;
    this.isDangerous = isDangerous ?? false;
    this.speed = speed ?? SPEED;

    const { width: canvasWidth } = ctx.canvas;

    this.x = Math.floor(Math.random() * (canvasWidth - this.width));
  }

  draw = () => {
    const { ctx, x, y, height, width, sprites } = this;

    if (sprites.collectible) {
      ctx.drawImage(sprites.collectible, x, y, height, width);
    }
  };

  move = () => {
    const { speed } = this;

    this.y += speed;
  };

  get isOnScreen() {
    const { height } = this.ctx.canvas;

    return this.y < height;
  }

  intersectsWithObject = (other: IGameObject) => {
    const { x, y, height, width } = this;

    return (
      x + width > other.x &&
      x < other.x + other.width &&
      y + height > other.y &&
      y < other.y + other.height
    );
  };
}
