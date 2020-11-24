import { Bucket, Collectible } from "./objects";
import { HUD } from "./hud";
import { Input, KEYS } from "./input";
import { Crash, Loss } from "./screens";

const FPS = 60;
const LIVES = 3;

export class Game {
  ctx;

  private numTicks = 0;

  private lastTick = 0;

  private tickLength = 1000 / FPS;

  private input;

  score = 0;

  lives = LIVES;

  private requestedFrame = 0;

  private collectibles: Collectible[];

  private bucket;

  private hud;

  private loss;

  private crash;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.input = new Input();
    this.input.addListeners();
    this.collectibles = [];
    this.bucket = new Bucket(this.ctx);
    this.hud = new HUD(this);
    this.loss = new Loss(this);
    this.crash = new Crash(this.ctx);
  }

  start = () => {
    const { loop } = this;

    this.lastTick = window.performance.now();
    loop(this.lastTick);
  };

  private restart = () => {
    const { collectibles, input, enqueue, loop } = this;

    this.lives = LIVES;
    this.score = 0;
    this.numTicks = 0;
    collectibles.length = 0;

    enqueue(loop);
    input.detach(KEYS.SPASEBAR, this.restart);
  };

  private enqueue = (cb: FrameRequestCallback) => {
    this.requestedFrame = window.requestAnimationFrame(cb);
  };

  private loop: FrameRequestCallback = (nextTick) => {
    const { input, enqueue, update, draw, restart, loss, crash, loop, tickLength, lives } = this;

    if (!lives) {
      input.on(KEYS.SPASEBAR, restart);
      enqueue(loss.draw);

      return;
    }

    const elapsed = nextTick - this.lastTick;

    if (elapsed >= tickLength) {
      this.numTicks += 1;
      this.lastTick = nextTick - (elapsed % tickLength);

      try {
        update();
        draw();
      } catch (error) {
        console.error(error);
        enqueue(crash.draw);

        return;
      }
    }

    enqueue(loop);
  };

  private update = () => {
    const { numTicks, ctx, input, bucket, collectibles } = this;

    if (input.keys.left) {
      bucket.move(true);
    } else if (input.keys.right) {
      bucket.move();
    }

    collectibles.forEach(({ isOnScreen, intersectsWithObject, dangerous, move }, index) => {
      if (isOnScreen) {
        if (intersectsWithObject(bucket)) {
          if (dangerous) {
            this.lives -= 1;
          } else {
            this.score += 1;
          }
          collectibles.splice(index, 1);
        }
        move();
      } else {
        if (!dangerous) {
          this.lives -= 1;
        }
        collectibles.splice(index, 1);
      }
    });

    if (numTicks % 75 === 0) {
      collectibles.push(new Collectible(ctx));
    }

    if (numTicks % 50 === 0) {
      collectibles.push(
        new Collectible(ctx, {
          dangerous: true,
          speed: 6,
        })
      );
    }
  };

  private draw = () => {
    const { ctx, bucket, hud, collectibles } = this;
    const { width, height } = ctx.canvas;

    ctx.clearRect(0, 0, width, height);

    bucket.draw();
    hud.draw();

    collectibles.forEach((collectible) => {
      collectible.draw();
    });
  };

  destroy() {
    const { input } = this;

    if (this.requestedFrame) {
      window.cancelAnimationFrame(this.requestedFrame);
    }

    input.removeListeners();
  }
}