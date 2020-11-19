import type { IGameObject } from "../types";

interface ICollectibleParams {
  speed?: number;
  dangerous?: boolean;
}

const SPEED = 4;

export class Collectible implements IGameObject {
  private ctx;

  x;

  y = 0;

  height = 20;

  width = 20;

  speed;

  dangerous;

  constructor(ctx: CanvasRenderingContext2D, { dangerous, speed }: ICollectibleParams = {}) {
    this.ctx = ctx;
    this.dangerous = dangerous ?? false;
    this.speed = speed ?? SPEED;

    const { width: canvasWidth } = ctx.canvas;

    this.x = Math.floor(Math.random() * (canvasWidth - this.width));
  }

  draw = () => {
    const { ctx } = this;

    ctx.fillStyle = this.dangerous ? "red" : "green";
    ctx.fillRect(this.x, this.y, this.height, this.width);
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
