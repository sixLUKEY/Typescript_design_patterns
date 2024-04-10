// The Flyweight concept

interface IFlyweight {
  code: number;
}

class Flyweight implements IFlyweight {
  // The concrete flyweight
  code: number;
  constructor(code: number) {
    this.code = code;
  }
}

/**
 *
 * @static @method getFlyweight() static method to get flyweight based on a code
 * @method getCount() returns the number of flyweights in cache
 */
class FlyweightFactory {
  // Creating the FlyweightFactory as a static class

  static flyweights: { [id: number]: Flyweight } = {};

  static getFlyweight(code: number): Flyweight {
    if (!(code in FlyweightFactory.flyweights)) {
      FlyweightFactory.flyweights[code] = new Flyweight(code);
    }
    return FlyweightFactory.flyweights[code];
  }
  /**
   * @returns the number of flyweights in cache
   */
  static getCount(): number {
    return Object.keys(FlyweightFactory.flyweights).length;
  }
}

/**
 * @description An example context that holds references to the flyweights in a particular order and converts the code to an ascii letter
 * @method output() the context specific output that uses flyweights
 */
class AppContext {
  private codes: number[] = [];

  constructor(codes: string) {
    for (let i = 0; i < codes.length; i++) {
      this.codes.push(codes.charCodeAt(i));
    }
  }

  output() {
    let ret = "";
    this.codes.forEach(
      (c) =>
        (ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code))
    );
    return ret;
  }
}

// Client side
const APP_CONTEXT = new AppContext("abracadabra");

// use flyweights in a context
console.log(APP_CONTEXT.output());

console.log(`abracadabra has ${"abracadabra".length} letters`);
console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`);
