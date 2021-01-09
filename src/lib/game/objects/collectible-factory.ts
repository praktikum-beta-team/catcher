import { loadImage } from "helpers/load-image";

import { Collectible } from "./collectible";
import type { ICollectibleParams } from "./collectible";

import CollectibleNormalSprite from "../assets/sprites/collectible-normal.svg";
import CollectibleDangerousSprite from "../assets/sprites/collectible-dangerous.svg";

export class CollectibleFactory {
  sprites = {
    normal: new Image(),
    dangerous: new Image(),
  };

  load = async () => {
    this.sprites.normal.src = await loadImage(CollectibleNormalSprite);
    this.sprites.dangerous.src = await loadImage(CollectibleDangerousSprite);
  };

  create = (ctx: CanvasRenderingContext2D, params: ICollectibleParams = {}) => {
    const { isDangerous } = params;
    const collectible = new Collectible(ctx, params);
    collectible.sprite = isDangerous ? this.sprites.dangerous : this.sprites.normal;

    return collectible;
  };
}
