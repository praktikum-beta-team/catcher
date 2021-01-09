import { loadImage } from "helpers/load-image";

import BackdropPattern from "./assets/backdrop.svg";

const HORIZONTAL_SPEED = 1.25;
const VERTICAL_SPEED = 1;

export class Backdrop {
  private ctx;

  pattern: CanvasPattern | null;

  transform;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.load = this.load.bind(this);
    this.pattern = null;
    this.transform = new DOMMatrix();
  }

  async load() {
    const pattern = new Image();
    pattern.src = await loadImage(BackdropPattern);
    this.pattern = this.ctx.createPattern(pattern, "repeat");
  }

  draw() {
    const { ctx, transform, pattern } = this;
    const { width, height } = ctx.canvas;

    if (pattern !== null) {
      transform.translateSelf(0, -VERTICAL_SPEED);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      pattern.setTransform(transform);
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, width, height);
    }
  }

  move(direction?: "left" | "right") {
    const { transform } = this;

    transform.translateSelf(direction === "left" ? -HORIZONTAL_SPEED : HORIZONTAL_SPEED);
  }
}
