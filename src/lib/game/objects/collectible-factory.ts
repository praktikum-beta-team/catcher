import { loadImage } from "helpers/load-image";

import { Collectible } from "./collectible";
import type { ICollectibleParams } from "./collectible";

import CollectibleNormalSprite from "../assets/sprites/collectible-normal.svg";
import CollectibleDangerousSprite from "../assets/sprites/collectible-dangerous.svg";
import type { Sprite } from "../types";

export class CollectibleFactory {
  sprites: Record<string, Sprite> = {
    normal: null,
    dangerous: null,
  };

  load = async () => {
    this.sprites.normal = await loadImage(CollectibleNormalSprite);
    this.sprites.dangerous = await loadImage(CollectibleDangerousSprite);
  };

  create = (ctx: CanvasRenderingContext2D, params: ICollectibleParams = {}) => {
    const { isDangerous } = params;
    const collectible = new Collectible(ctx, params);
    const { sprites } = this;

    if (sprites.normal && sprites.dangerous) {
      collectible.sprites.collectible = isDangerous
        ? <HTMLImageElement>sprites.dangerous
        : <HTMLImageElement>sprites.normal;
    }

    return collectible;
  };
}
