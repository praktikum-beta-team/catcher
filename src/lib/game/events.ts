export type Callback = (...args: any[]) => void;

export enum GameEvent {
  GameOver,
}

export class Events {
  listeners: Partial<Record<GameEvent, Callback[]>> = {};

  on = (event: GameEvent, cb: Callback) => {
    const { listeners } = this;

    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event]!.push(cb);
  };

  emit = (event: GameEvent, ...args: unknown[]) => {
    const { listeners } = this;

    if (listeners[event]) {
      listeners[event]!.forEach((cb) => {
        cb(...args);
      });
    }
  };

  detach(event: GameEvent, cb: Callback) {
    const { listeners } = this;

    if (listeners[event]) {
      listeners[event] = listeners[event]!.filter((listener) => listener !== cb);
    }
  }
}
