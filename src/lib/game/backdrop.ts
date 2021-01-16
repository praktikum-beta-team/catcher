import { loadImage } from "helpers/load-image";

import BackdropPattern from "./assets/backdrop.svg";
import type { Sprite } from "./types";

const HORIZONTAL_SPEED = 1.25;
const VERTICAL_SPEED = 1;

export class Backdrop {
  private ctx;

  sprites: Record<string, Sprite> = {
    pattern: null,
  };

  transform;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.load = this.load.bind(this);
    this.transform = new DOMMatrix();
  }

  async load() {
    const patternSprite = await loadImage(BackdropPattern);

    /**
     * В Safari svg нельзя использовать как Pattern, поэтому используем промежуточный canvas
     * https://bugs.webkit.org/show_bug.cgi?id=45277
     */

    const patternCanvas = document.createElement("canvas");

    patternCanvas.height = 640;
    patternCanvas.width = 480;

    const patternCtx = patternCanvas.getContext("2d");

    if (patternCtx) {
      patternCtx.drawImage(patternSprite, 0, 0, 480, 640);
    }

    this.sprites.pattern = this.ctx.createPattern(patternCanvas, "repeat");
  }

  draw() {
    const { ctx, transform, sprites } = this;
    const { width, height } = ctx.canvas;

    if (sprites.pattern) {
      transform.translateSelf(0, -VERTICAL_SPEED);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sprites.pattern.setTransform(transform);
      ctx.fillStyle = <CanvasPattern>sprites.pattern;
      ctx.fillRect(0, 0, width, height);
    }
  }

  move(direction?: "left" | "right") {
    const { transform } = this;

    transform.translateSelf(direction === "left" ? -HORIZONTAL_SPEED : HORIZONTAL_SPEED);
  }
}
