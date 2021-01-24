interface MouseEvent {
  mozMovementX?: number;
  webkitMovementX?: number;
}

interface Document {
  mozPointerLockElement?: Element | null;
  webkitPointerLockElement?: Element | null;
  mozExitPointerLock: void;
  webkitExitPointerLock: void;
}

interface Element {
  mozRequestPointerLock: () => void;
  webkitRequestPointerLock: () => void;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}
