import { Product } from "./product";

abstract class ProductDecorator extends Product {
  protected product: Product;

  constructor(_product: Product) {
    super(_product.name, _product.price);
    this.product = _product;
  }

  getDescription(): string {
    return this.product.getDescription();
  }
}

export class GiftWrapper extends ProductDecorator {
  constructor(product: Product) {
    super(product);
  }

  getDescription(): string {
      return `${this.product.getDescription()} (Gift Wrapped)`
  }

  getExtraCost(): number {
    return 5;
  }
}
