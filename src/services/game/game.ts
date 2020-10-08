import { Bucket, Collectible } from "./objects";
import { HUD } from "./hud";
import { Input, KEYS } from "./input";
import { Loss } from "./screens";

const FPS = 60;
const LIVES = 3;

export class Game {
  ctx;

  numTicks = 0;

  lastTick = 0;

  tickLength = 1000 / FPS;

  input;

  score = 0;

  lives = LIVES;

  requestedFrame = 0;

  collectibles: Collectible[];

  bucket;

  hud;

  loss;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.input = new Input();
    this.input.addListeners();
    this.collectibles = [];
    this.bucket = new Bucket(this.ctx);
    this.hud = new HUD(this);
    this.loss = new Loss(this);
  }

  start = () => {
    const { loop } = this;

    this.lastTick = window.performance.now();
    loop(this.lastTick);
  };

  restart = () => {
    const { collectibles, input, enqueue, loop } = this;

    this.lives = LIVES;
    this.score = 0;
    this.numTicks = 0;
    collectibles.length = 0;

    enqueue(loop);
    input.detach(KEYS.SPASEBAR, this.restart);
  };

  enqueue = (cb: FrameRequestCallback) => {
    this.requestedFrame = window.requestAnimationFrame(cb);
  };

  loop: FrameRequestCallback = (nextTick) => {
    const { input, enqueue, update, draw, restart, loss, loop, tickLength, lives } = this;

    if (!lives) {
      input.on(KEYS.SPASEBAR, restart);
      enqueue(loss.draw);

      return;
    }

    const elapsed = nextTick - this.lastTick;

    if (elapsed >= tickLength) {
      this.numTicks += 1;
      this.lastTick = nextTick - (elapsed % tickLength);
      update();
      draw();
    }

    enqueue(loop);
  };

  update = () => {
    const { numTicks, ctx, input, bucket, collectibles } = this;

    if (input.keys.left) {
      bucket.move(true);
    } else if (input.keys.right) {
      bucket.move();
    }

    collectibles.forEach((collectible, index) => {
      if (collectible.isOnScreen) {
        if (collectible.intersectsWithObject(bucket)) {
          if (collectible.params.dangerous) {
            this.lives -= 1;
          } else {
            this.score += 1;
          }
          collectibles.splice(index, 1);
        }
        collectible.move();
      } else {
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

  draw = () => {
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
