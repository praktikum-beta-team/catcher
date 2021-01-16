export type Sprite = HTMLImageElement | null;

export interface IGameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  sprites?: Record<string, Sprite>;
}
