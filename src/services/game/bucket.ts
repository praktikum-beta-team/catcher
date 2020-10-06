/* eslint-disable no-param-reassign */
export class Bucket {
  y;

  x;

  height;

  width;

  ctx;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.height = 20;
    this.width = 50;
    this.x = 0;
    this.y = ctx.canvas.height - this.height;
  }

  draw() {
    this.ctx.fillStyle = "#ff0000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    return this;
  }

  move(left = false) {
    if (left) {
      this.x -= 5;
    } else {
      this.x += 5;
    }

    return this;
  }
}
