import { Bucket } from "./objects";
import type { Collectible } from "./objects";
import { HUD } from "./hud";
import { Keyboard, KEYS } from "./keyboard";
import { Pointer } from "./pointer";
import { Crash, Loss } from "./screens";
import { Backdrop } from "./backdrop";
import { CollectibleFactory } from "./objects/collectible-factory";

const FPS = 60;
const LIVES = 3;

export class Game {
  ctx;

  private numTicks = 0;

  private lastTick = 0;

  private tickLength = 1000 / FPS;

  private keyboard;

  private pointer;

  score = 0;

  lives = LIVES;

  private requestedFrame = 0;

  private collectibles: Collectible[];

  private bucket;

  private hud;

  private loss;

  private crash;

  private backdrop;

  private collectibleFactory;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.keyboard = new Keyboard();
    this.keyboard.addListeners();
    this.pointer = new Pointer(ctx.canvas);
    this.pointer.addListeners();
    this.collectibles = [];
    this.bucket = new Bucket(this.ctx);
    this.hud = new HUD(this);
    this.loss = new Loss(this);
    this.crash = new Crash(this.ctx);
    this.backdrop = new Backdrop(this.ctx);
    this.collectibleFactory = new CollectibleFactory();
  }

  load = async () => {
    const { bucket, backdrop, collectibleFactory } = this;

    await Promise.all([bucket.load(), backdrop.load(), collectibleFactory.load()]);
  };

  start = () => {
    const { loop } = this;

    this.lastTick = window.performance.now();
    loop(this.lastTick);
  };

  private restart = () => {
    const { collectibles, keyboard, enqueue, loop } = this;

    this.lives = LIVES;
    this.score = 0;
    this.numTicks = 0;
    collectibles.length = 0;

    enqueue(loop);
    keyboard.detach(KEYS.SPASEBAR, this.restart);
  };

  private enqueue = (cb: FrameRequestCallback) => {
    this.requestedFrame = window.requestAnimationFrame(cb);
  };

  private loop: FrameRequestCallback = (nextTick) => {
    const { keyboard, enqueue, update, draw, restart, loss, crash, loop, tickLength, lives } = this;

    if (!lives) {
      keyboard.on(KEYS.SPASEBAR, restart);
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
    const { numTicks, ctx, keyboard, bucket, collectibles, pointer, backdrop } = this;
    if (keyboard.keys.left) {
      bucket.move({ direction: "left" });
      backdrop.move("right");
    } else if (keyboard.keys.right) {
      bucket.move({ direction: "right" });
      backdrop.move("left");
    } else if (pointer.events.x) {
      bucket.move({ dx: pointer.events.x });
    }

    collectibles.forEach(({ isOnScreen, intersectsWithObject, isDangerous, move }, index) => {
      if (isOnScreen) {
        if (intersectsWithObject(bucket)) {
          if (isDangerous) {
            this.lives -= 1;
          } else {
            this.score += 1;
          }
          collectibles.splice(index, 1);
        }
        move();
      } else {
        if (!isDangerous) {
          this.lives -= 1;
        }
        collectibles.splice(index, 1);
      }
    });

    if (numTicks % 75 === 0) {
      const collectible = this.collectibleFactory.create(ctx);

      collectibles.push(collectible);
    }

    if (numTicks % 50 === 0) {
      const collectible = this.collectibleFactory.create(ctx, {
        isDangerous: true,
        speed: 6,
      });

      collectibles.push(collectible);
    }
  };

  private draw = () => {
    const { ctx, bucket, hud, collectibles, backdrop } = this;
    const { width, height } = ctx.canvas;

    ctx.clearRect(0, 0, width, height);

    backdrop.draw();
    bucket.draw();
    hud.draw();

    collectibles.forEach((collectible) => {
      collectible.draw();
    });
  };

  destroy() {
    const { keyboard, pointer } = this;

    if (this.requestedFrame) {
      window.cancelAnimationFrame(this.requestedFrame);
    }

    keyboard.removeListeners();
    pointer.removeListeners();
  }
}
