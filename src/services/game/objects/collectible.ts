import type { IGameObject } from "../types";

interface ICollectibleParams {
  speed: number;
  dangerous: boolean;
}

export class Collectible implements IGameObject {
  ctx;

  x;

  y = 0;

  height = 20;

  width = 20;

  params;

  constructor(ctx: CanvasRenderingContext2D, params: ICollectibleParams = {
    speed: 4,
    dangerous: false,
  }) {
    this.ctx = ctx;
    this.params = params;

    const { width: canvasWidth } = ctx.canvas;
    this.x = Math.floor(Math.random() * canvasWidth - this.width);
  }

  draw() {
    const { ctx } = this;

    ctx.fillStyle = this.params.dangerous ? "red" : "green";
    ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  move() {
    this.y += this.params.speed;
  }

  get isOnScreen() {
    return this.y < this.ctx.canvas.height;
  }

  intersectsWithObject(other: IGameObject) {
    const { x, y, height, width } = this;
    
    return (
      x + width > other.x &&
      x < other.x + other.width &&
      y + height > other.y &&
      y < other.y + other.height
    );
  }
}
