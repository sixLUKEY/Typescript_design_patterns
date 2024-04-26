import { IPricingStrategy } from "./store.interfaces";

export class RegularPricingStrategy implements IPricingStrategy {
  apply(price: number): number {
    return price;
  }
}

export class DiscountPricingStrategy implements IPricingStrategy {
  private discount: number;

  constructor(_discount: number) {
    this.discount = _discount;
  }

  apply(price: number): number {
    return price - price * this.discount;
  }
}