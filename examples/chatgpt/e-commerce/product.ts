import { IProduct } from "./store.interfaces";

export abstract class Product implements IProduct {
  constructor(public name: string, public price: number) {}

  getDescription(): string {
    return `${this.name} costs R${this.price}`;
  }
}

export class ConcreteProduct extends Product {}

