export class Input {
  keys: Record<string, boolean>;

  constructor() {
    this.keys = {
      left: false,
      right: false,
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
    const keyState = type === "keydown";

    // eslint-disable-next-line default-case
    switch (key) {
      case "Right":
      case "ArrowRight":
        this.keys.right = keyState;
        break;
      case "Left":
      case "ArrowLeft":
        this.keys.left = keyState;
        break;
    }
  };
}
