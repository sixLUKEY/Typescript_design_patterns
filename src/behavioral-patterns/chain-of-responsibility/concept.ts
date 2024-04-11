// Chain of Responsibility Pattern concept

/** Handler interface that the Successor should implement/ */
interface IHandler {
  handle(payload: number): number;
}

/** A concrete handler */
class Successor1 implements IHandler {
  handle(payload: number): number {
    console.log(`Successor1 payload = ${payload}`);
    const test = Math.floor(Math.random() * 2) + 1;
    if (test === 1) {
      payload += 1;
      payload = new Successor1().handle(payload);
    } else {
      payload -= 1;
      payload = new Successor2().handle(payload);
    }
    return payload;
  }
}

/** A concrete handler */
class Successor2 implements IHandler {
  handle(payload: number): number {
    console.log(`Successor2 payload = ${payload}`);
    const test = Math.floor(Math.random() * 3) + 1;
    if (test === 1) {
      payload = payload * 2;
      payload = new Successor1().handle(payload);
    } else if (test === 2) {
      payload = payload / 2;
      payload = new Successor2().handle(payload);
    }
    // If test = 3 then assign no further successors
    return payload;
  }
}

/** A chain with a default first successor */
class Chain {
  /** @method start() sets the first successor that will modify the payload */
  start(payload: number) {
    return new Successor1().handle(payload);
  }
}

// Client side
const CHAIN = new Chain();
const PAYLOAD = 1;
const OUT = CHAIN.start(PAYLOAD);
console.log(`Finished result = ${OUT}`);
