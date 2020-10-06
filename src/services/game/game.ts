import { Collectible } from "./collectible";
import { Bucket } from "./bucket";

const FPS = 60;

export class Game {
  ctx;

  frame;

  rightPressed;

  leftPressed;

  collectibles: any[];

  bucket;

  pause;

  score;

  requestedFrame?: number;

  lastFrameTime?: number;

  frameInterval: number;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.frame = 0;
    this.score = 0;
    this.rightPressed = false;
    this.leftPressed = false;

    this.collectibles = [];
    this.bucket = new Bucket(this.ctx);

    this.pause = false;

    this.frameInterval = 1000 / FPS;

    this.init();
  }

  init() {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Right" || event.key === "ArrowRight") {
        this.rightPressed = true;
      } else if (event.key === "Left" || event.key === "ArrowLeft") {
        this.leftPressed = true;
      }
    };

    const keyUpHandler = (event: KeyboardEvent) => {
      if (event.key === "Right" || event.key === "ArrowRight") {
        this.rightPressed = false;
      } else if (event.key === "Left" || event.key === "ArrowLeft") {
        this.leftPressed = false;
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
  }

  destroy() {
    if (this.requestedFrame) {
      window.cancelAnimationFrame(this.requestedFrame);
    }
  }

  render = () => {
    this.lastFrameTime = window.performance.now();
    this.loop(this.lastFrameTime);
  };

  loop: FrameRequestCallback = (currentTime) => {
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

    if (this.leftPressed) {
      this.bucket.move(true);
    } else if (this.rightPressed) {
      this.bucket.move();
    }

    this.bucket.draw();

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
