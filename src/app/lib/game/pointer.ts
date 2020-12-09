/* eslint-disable @typescript-eslint/no-explicit-any */

import { TEXT } from "app/constants/text";

export const MOUSE_EVENTS = <const>{
  X: "x",
};

export class Pointer {
  private element: Element;

  events: {
    [MOUSE_EVENTS.X]: number | null;
  };

  private hasPointerLock =
    "pointerLockElement" in document ||
    "mozPointerLockElement" in document ||
    "webkitPointerLockElement" in document;

  constructor(element: Element) {
    this.element = element;
    this.events = {
      [MOUSE_EVENTS.X]: null,
    };
    this.element.requestPointerLock =
      element.requestPointerLock ||
      (element as any).mozRequestPointerLock ||
      (element as any).webkitRequestPointerLock;
    document.exitPointerLock =
      document.exitPointerLock ||
      (document as any).mozExitPointerLock ||
      (document as any).webkitExitPointerLock;
  }

  addListeners() {
    const { element, isLocked, changeCallback } = this;

    ["mouseover", "click"].forEach((e) => {
      element.addEventListener(e, () => {
        if (!isLocked()) element.requestPointerLock();
      });
    });
    ["pointerlockchange", "mozpointerlockchange", "webkitpointerlockchange"].forEach((e) => {
      document.addEventListener(e, changeCallback, false);
    });
  }

  removeListeners() {
    const { element, changeCallback } = this;

    ["mouseover", "click"].forEach((e) => {
      element.removeEventListener(e, () => {
        element.requestPointerLock();
      });
    });
    ["pointerlockchange", "mozpointerlockchange", "webkitpointerlockchange"].forEach((e) => {
      document.removeEventListener(e, changeCallback, false);
    });
  }

  private isLocked = () => {
    const { element } = this;

    return (
      element === document.pointerLockElement ||
      element === (document as any).mozPointerLockElement ||
      element === (document as any).webkitPointerLockElement
    );
  };

  private changeCallback = () => {
    const { hasPointerLock, isLocked, handleMouseButtonPress, handleMouseMove } = this;

    if (!hasPointerLock) {
      console.log(TEXT.GAME.ERROR_POINTER_LOCK_API);

      return;
    }

    if (isLocked()) {
      document.addEventListener("mousedown", handleMouseButtonPress, false);
      document.addEventListener("mousemove", handleMouseMove, false);
    } else {
      document.removeEventListener("mousedown", handleMouseButtonPress, false);
      document.removeEventListener("mousemove", handleMouseMove, false);
    }
  };

  private handleMouseMove = (e: MouseEvent) => {
    const { events } = this;
    events[MOUSE_EVENTS.X] =
      e.movementX || (e as any).mozMovementX || (e as any).webkitMovementX || 0;
  };

  private handleMouseButtonPress = ({ button }: MouseEvent) => {
    // eslint-disable-next-line default-case
    switch (button) {
      case 2:
        document.exitPointerLock();
        break;
    }
  };
}
