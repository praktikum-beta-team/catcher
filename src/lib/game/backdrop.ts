import { loadImage } from "helpers/load-image";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pattern = require("./textures/background.svg");

const HORIZONTAL_SPEED = 1.25;
const VERTICAL_SPEED = 1;

export class Backdrop {
  private ctx;

  textures = {
    pattern: new Image(),
  };

  transform;

  pattern: string | CanvasGradient | CanvasPattern | null;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.load = this.load.bind(this);
    this.pattern = null;
    this.transform = new DOMMatrix();
  }

  async load() {
    this.textures.pattern.src = await loadImage(Pattern);
    this.pattern = this.ctx.createPattern(this.textures.pattern, "repeat");
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
