import { Input } from "./input";
import { HUD } from "./hud";
import { Collectible } from "./collectible";
import { Bucket } from "./bucket";

const FPS = 60;

export class Game {
  ctx;

  frame;

  collectibles: any[];

  bucket;

  pause;

  score;

  requestedFrame?: number;

  lastFrameTime?: number;

  frameInterval: number;

  input;

  hud;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.frame = 0;
    this.score = 0;

    this.collectibles = [];
    this.bucket = new Bucket(this.ctx);

    this.pause = false;

    this.frameInterval = 1000 / FPS;

    this.input = new Input();
    this.input.addListeners();

    this.hud = new HUD(this);
  }

  destroy() {
    if (this.requestedFrame) {
      window.cancelAnimationFrame(this.requestedFrame);
    }

    this.input.removeListeners();
  }

  render = () => {
      this.lastFrameTime = window.performance.now();
      this.loop(this.lastFrameTime);
  };

  loop: FrameRequestCallback = (currentTime) => {
    if (this.score > 20) return;

    this.requestedFrame = window.requestAnimationFrame(this.loop);

    const elapsedTime = currentTime - this.lastFrameTime!;

    if (elapsedTime >= this.frameInterval) {
      this.lastFrameTime = currentTime - (elapsedTime % this.frameInterval);
      this.draw();
    }
  };

  draw() {
    this.frame += 1;

    if (this.frame % 50 === 0) {
      this.collectibles.push(new Collectible(this.ctx));
      console.log(this.collectibles);
    }

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    if (this.input.keys.left) {
      this.bucket.move(true);
    } else if (this.input.keys.right) {
      this.bucket.move();
    }

    this.bucket.draw();

    this.hud.draw();

    this.collectibles.forEach((collectible, index) => {
      if (collectible.isOnScreen) {
        if (collectible.intersectsWithObject(this.bucket)) {
          this.score += 1;
          console.log(`🔥 ${this.score}`);
          this.collectibles.splice(index, 1);
        }
        collectible.move().draw(this.ctx);
      } else {
        this.collectibles.splice(index, 1);
      }
    });
  }
}
