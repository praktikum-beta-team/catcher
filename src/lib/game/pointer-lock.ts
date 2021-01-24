// prettier-ignore

import { throttle } from 'lodash';

import { TEXT } from "constants/text";

const SPEED = 2;

export class PointerLock {
  private canvas;

  movementX = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  init() {
    const {
      canvas,
      handleChangePointerLock,
      requestPointerLock,
      handlePointerLockError,
      handleMouseButtonPress,
    } = this;

    canvas.requestPointerLock =
      canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;

    document.exitPointerLock =
      document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;

    ["pointerlockchange", "mozpointerlockchange", "webkitpointerlockchange"].forEach((event) => {
      document.addEventListener(event, handleChangePointerLock, false);
    });

    ["pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror"].forEach((event) => {
      document.addEventListener(event, handlePointerLockError, false);
    });

    canvas.addEventListener("click", requestPointerLock, false);
    document.addEventListener("mouseup", handleMouseButtonPress, false);
  }

  destroy() {
    const {
      canvas,
      requestPointerLock,
      handleChangePointerLock,
      handleMouseButtonPress,
      handlePointerLockError,
    } = this;

    ["pointerlockchange", "mozpointerlockchange", "webkitpointerlockchange"].forEach((event) => {
      document.removeEventListener(event, handleChangePointerLock);
    });

    ["pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror"].forEach((event) => {
      document.removeEventListener(event, handlePointerLockError);
    });

    canvas.removeEventListener("click", requestPointerLock);
    document.addEventListener("mouseup", handleMouseButtonPress);
  }

  private requestPointerLock = () => {
    const { isPointerLocked, canvas } = this;

    if (!isPointerLocked) canvas.requestPointerLock();
  };

  private handleMouseButtonPress = ({ button }: MouseEvent) => {
    const { isPointerLocked } = this;

    if (!isPointerLocked && button === 2) {
      document.exitPointerLock();
    }
  };

  private handlePointerLockError = () => {
    console.error(TEXT.GAME.ERROR_POINTER_LOCK_API);
  };

  private get isPointerLocked() {
    const { canvas } = this;

    return (
      canvas === document.pointerLockElement ||
      canvas === document.mozPointerLockElement ||
      canvas === document.webkitPointerLockElement
    );
  }

  handlePointerMove = throttle((event: MouseEvent) => {
    this.movementX = SPEED * (event.movementX || event.mozMovementX || event.webkitMovementX || 0);
  }, 50);

  handleChangePointerLock = () => {
    const { isPointerLocked, handlePointerMove } = this;

    if (isPointerLocked) {
      document.addEventListener("mousemove", handlePointerMove, false);
    } else {
      this.movementX = 0;
      document.removeEventListener("mousemove", handlePointerMove);
    }
  };
}
