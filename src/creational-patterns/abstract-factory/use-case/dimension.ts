type Dimension = {
  height: number;
  width: number;
  depth: number;
};

export interface Product {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): Dimension
}
