export interface IProduct {
  name: string;
  price: number;
  getDescription(): string;
}

export interface IProductFactory {
  createProduct(): IProduct;
}

export interface IPricingStrategy {
  apply(price: number): number;
}
