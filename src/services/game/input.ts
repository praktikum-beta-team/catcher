export const KEYS = <const>{
  LEFT: "left",
  RIGHT: "right",
  SPASEBAR: "spacebar",
};

type callback = (...args: unknown[]) => void;

type Keys = typeof KEYS[keyof typeof KEYS];

export class Input {
  keys: {
    [P in Keys]: boolean;
  };

  listeners: Record<string, callback[]> = {};

  constructor() {
    this.keys = {
      left: false,
      right: false,
      spacebar: false,
    };
  }

  addListeners() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyPress);
  }

  removeListeners() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyPress);
  }

  handleKeyPress = ({ key, type }: KeyboardEvent) => {
    const { keys, emit } = this;
    const pressed = type === "keydown";

    // eslint-disable-next-line default-case
    switch (key) {
      case "Right":
      case "ArrowRight":
        keys[KEYS.RIGHT] = pressed;
        break;
      case "Left":
      case "ArrowLeft":
        keys[KEYS.LEFT] = pressed;
        break;
      case "Spacebar":
      case " ":
        keys[KEYS.SPASEBAR] = pressed;
        if (pressed) emit(KEYS.SPASEBAR);
        break;
    }
  };

  /**
   * TODO: Добавить возможность подписываться на событие однократно
   * on(key: string, cb: callback, once = false) {}
   */

  on = (key: Keys, cb: callback) => {
    const { listeners } = this;

    if (!listeners[key]) {
      listeners[key] = [];
    }

    listeners[key].push(cb);
  };

  emit = (key: Keys) => {
    const { listeners } = this;

    if (listeners[key]) {
      listeners[key].forEach((cb) => {
        cb();
      });
    }
  };

  detach(key: Keys, cb: callback) {
    const { listeners } = this;

    listeners[key] = listeners[key].filter((listener) => listener !== cb);
  }
}
