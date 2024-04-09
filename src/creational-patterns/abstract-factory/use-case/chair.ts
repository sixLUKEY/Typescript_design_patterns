import { Product } from "./dimension";

export type ChairName = "BigChair" | "SmallChair" | "MediumChair";

export class Chair implements Product {
  name = "";
  height = 0;
  width = 0;
  depth = 0;

  getDimensions(): { height: number; width: number; depth: number } {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth,
    };
  }
}
