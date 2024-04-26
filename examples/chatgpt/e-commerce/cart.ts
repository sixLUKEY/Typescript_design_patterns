import { Product } from "./product";

export class Cart {
  private static instance: Cart;
  private products: Product[] = [];

  private constructor() {} // private to prevent direct instantiation

  static getInstance(): Cart {
    if (!Cart.instance) {
      Cart.instance = new Cart();
    }
    return Cart.instance;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
