// Abstract Factory Concept Sample Code
import { FactoryA, IProductA } from "./factory-a";
import { FactoryB, IProductB } from "./factory-b";

type Factory = "aa" | "ab" | "ac" | "ba" | "bb" | "bc";

interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
  // Abstract factory concrete class

  static createObject(factory: Factory): IProduct | undefined {
    try {
      if (["aa", "ab", "ac"].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1]);
      }
      if (["ba", "bb", "bc"].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1]);
      }
      throw new Error("No Factory found");
    } catch (err) {
      console.error(err);
    }
  }
}

// Client side
let PRODUCT = AbstractFactory.createObject("ab");
console.log(PRODUCT);

PRODUCT = AbstractFactory.createObject("bc");
console.log(PRODUCT);
