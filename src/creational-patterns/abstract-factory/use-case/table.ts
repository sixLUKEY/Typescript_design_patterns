import { Product } from "./dimension";

export type TableName = 'BigTable' | 'SmallTable' | 'MediumTable' | string

export class Table implements Product {
  name = "";
  height = 0;
  width = 0;
  depth = 0;

  getDimensions() {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height,
    };
  }
}
