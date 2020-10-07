/* eslint-disable no-param-reassign */
export class Collectible {
  x;

  y;

  height;

  width;

  ctx;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.height = 20;
    this.width = 20;
    this.y = 0;
    this.x = Math.floor(Math.random() * ctx.canvas.width - this.width);
  }

  draw() {
    this.ctx.fillStyle = "#00ff00";
    this.ctx.fillRect(this.x, this.y, this.height, this.width);

    return this;
  }

  move() {
    this.y += 5;

    return this;
  }

  get isOnScreen() {
    return this.y < this.ctx.canvas.height;
  }

  intersectsWithObject(other: any) {
    return (
      this.x + this.width > other.x &&
      this.x < other.x + other.width &&
      this.y + this.height > other.y &&
      this.y < other.y + other.height
    );
  }
}
