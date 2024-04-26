import { ConcreteProduct, Product } from "./product";

abstract class ProductFactory {
  abstract createProduct(name: string, price: number): Product;
}

export class ConcreteProductFactory extends ProductFactory {
  createProduct(name: string, price: number): Product {
    return new ConcreteProduct(name, price);
  }
}
