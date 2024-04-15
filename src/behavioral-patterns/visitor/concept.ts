// The Visitor Pattern Concept

/** An interface that custom visitors should implement */
interface IVisitor {
  visit(part: Part): void;
}

/** An interface the concrete objects should implement that allows the visitor to traverse a hierarchical structure of objects */
interface IVisitable {
  accept(visitor: IVisitor): void;
}

/** a.k.a Element, An object that can be part of any hierarchy */
class Part implements IVisitable {
  name: string;
  value: number;
  parts: Set<Part>;

  constructor(name: string, value: number, parent?: Part) {
    this.name = name;
    this.value = value;
    this.parts = new Set();
    if (parent) {
      parent.parts.add(this);
    }
  }

  /** Required by the Visitor that will traverse */
  accept(visitor: IVisitor): void {
    this.parts.forEach((part) => {
      part.accept(visitor);
    });
    visitor.visit(this);
  }
}

// Client side
// Creating an example object hierarchy
const PART_A = new Part("A", 101);
const PART_B = new Part("B", 305, PART_A);
const PART_C = new Part("C", 185, PART_A);
const PART_D = new Part("D", -30, PART_B);

// Now rather than changing the Part class to support custom operations, we can utilise the accept method that was implemented in the Part class because of the addition of the IVisitable interface

/** Create a visitor that prints the part names */
class PrintPartNamesVisitor implements IVisitor {
  visit(part: Part): void {
    console.log(part.name);
  }
}

// Using the PrintPartNamesVisitor to traverse the object hierarchy
PART_A.accept(new PrintPartNamesVisitor());

/** Create a visitor that totals the part values */
class CalculatePartTotalsVisitor implements IVisitor {
  totalValue = 0;

  visit(part: Part): void {
    this.totalValue += part.value;
  }
}

// Using the CalculatePartTotalsVisitor to traverse the object hierarchy
const CALC_TOTALS_VISITOR = new CalculatePartTotalsVisitor();
PART_A.accept(CALC_TOTALS_VISITOR);
console.log(CALC_TOTALS_VISITOR.totalValue);
