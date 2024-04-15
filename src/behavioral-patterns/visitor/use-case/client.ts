// The visitor Pattern use case example

import AbstractCarPart from "./abstract-car-part";
import IVisitor from "./ivisitor";

/** A part of the car */
class CarBody extends AbstractCarPart {}

/** A part of the car */
class Engine extends AbstractCarPart {}

/** A part of the car */
class Wheel extends AbstractCarPart {}

/** A Car with parts */
class Car extends AbstractCarPart {
  protected parts: Array<AbstractCarPart>;

  constructor(name: string) {
    super(name);
    this.parts = [
      new CarBody("Utility Body", "ABC-123-21", 1001),
      new Engine("V8 engine", "DEF-456-21", 2555),
      new Wheel("FrontLeft", "GHI-789FL-21", 136),
      new Wheel("FrontRight", "GHI-789FR-21", 136),
      new Wheel("BackLeft", "GHI-789BL-21", 152),
      new Wheel("BackRight", "GHI-789BR-21", 152),
    ];
  }

  accept(visitor: IVisitor): void {
    this.parts.forEach((part) => {
      part.accept(visitor);
    });
    visitor.visit(this);
  }
}

/** Print out the part name and sku */
class PrintPartsVisitor implements IVisitor {
  visit(abstractCarPart: AbstractCarPart): void {
    if (abstractCarPart.sku !== undefined) {
      console.log(
        `${abstractCarPart.name}\t:${abstractCarPart.sku}\t:${abstractCarPart.price}`
      );
    }
  }
}

/** Print out the total cost of the parts in the car */
class TotalPriceVisitor implements IVisitor {
  totalPrice = 0;

  visit(abstractCarPart: AbstractCarPart): void {
    if (abstractCarPart.price !== undefined) {
      this.totalPrice += abstractCarPart.price as number;
    }
  }
}

// Client side
const CAR = new Car("DeLorean");

// Print out the part name and sku using the PrintPartsVisitor
CAR.accept(new PrintPartsVisitor());

// Calculate the total price of the parts using the TotalPriceVisitor
const TOTAL_PRICE_VISITOR = new TotalPriceVisitor();
CAR.accept(TOTAL_PRICE_VISITOR);
console.log(`Total Price = ${TOTAL_PRICE_VISITOR.totalPrice}`);
