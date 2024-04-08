import { Dimension } from "./dimension";

// Chair Interface
export interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): Dimension;
}

export type ChairName = "SmallChair" | "BigChair" | "MediumChair" | string

// Chair Base Class
export default class Chair implements IChair {
  height = 0;
  width = 0;
  depth = 0;

  createObject() {
    return this;
  }

  getDimensions(): Dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}
