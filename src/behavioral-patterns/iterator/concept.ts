// The Iterator Pattern Concept

interface IIterator {
  /** @method next() returns the object in collection */
  next(): IAggregate;

  /** @method hasNext() returns boolean whether at the end of collection or not */
  hasNext(): boolean;
}

class IteratorConcept implements IIterator {
  // The concrete iterator (iterable)
  index: number;
  aggregates: IAggregate[];

  constructor(aggregates: IAggregate[]) {
    this.index = 0;
    this.aggregates = aggregates;
  }

  next(): IAggregate {
    if (this.index < this.aggregates.length) {
      const aggregate = this.aggregates[this.index];
      this.index += 1;
      return aggregate;
    }
    throw new Error("At end of Iterator");
  }

  hasNext(): boolean {
    return this.index < this.aggregates.length;
  }
}

interface IAggregate {
  method(): void;
}

class Aggregate implements IAggregate {
  // A concrete object
  method(): void {
    console.log("This method has been invoked");
  }
}

// Client side
const AGGREGATES = [
  new Aggregate(),
  new Aggregate(),
  new Aggregate(),
  new Aggregate(),
];

// AGGREGATES is an array that is already iterable by default, but we can create our own iterator on top anyway
const ITERABLE = new IteratorConcept(AGGREGATES);

while (ITERABLE.hasNext()) {
  ITERABLE.next().method();
}
