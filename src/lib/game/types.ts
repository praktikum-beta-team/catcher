export type Sprite = HTMLImageElement | CanvasPattern | null;

export interface IGameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  sprites?: Record<string, Sprite>;
}
