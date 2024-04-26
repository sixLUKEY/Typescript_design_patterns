import { Cart } from "./cart";
import { GiftWrapper } from "./decorator";
import { ConcreteProductFactory } from "./factory";
import { DiscountPricingStrategy } from "./strategy";

const factory = new ConcreteProductFactory();

// Create different products
let phone = factory.createProduct("iPhone", 699);
let laptop = factory.createProduct("macBook", 1499);

// Add to Singleton Cart
const cart = Cart.getInstance();
cart.addProduct(phone);
cart.addProduct(laptop);

// Apply discount strategy
const discount = new DiscountPricingStrategy(0.3);
let discountedPhone = discount.apply(phone.price);
let discountedLaptop = discount.apply(laptop.price);

// Apply Decorator
const giftWrappedPhone = new GiftWrapper(phone);

// Display cart details
console.log(`Cart total (before discount) : ${cart.getTotal()}`);
console.log(`Cart items : `);
cart.getProducts().forEach((prod) => console.log(prod.getDescription()));

// Add products with new strategy prices
cart.addProduct(factory.createProduct("iPhone (discounted)", discountedPhone));
cart.addProduct(factory.createProduct("macBook (discounted)", discountedPhone));

console.log(`Cart Total (after discount): ${cart.getTotal()}`);

// Display gift-wrapped product description
console.log(
  giftWrappedPhone.getDescription(),
  `Extra Cost : ${giftWrappedPhone.getExtraCost()}`
);
