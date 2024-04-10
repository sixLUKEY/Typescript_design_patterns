import Flyweight from "./flyweight";

/**
 * @method getFlyweight() get a flyweight based on a code
 * @method getCount() returns the number of flyweights in the cache
 */
export default class FlyweightFactory {
  // Creating the FlyweightFactory as a static class

  static flyweights: { [id: number]: Flyweight } = {};

  static getFlyweight(code: number): Flyweight {
    if (!(code in FlyweightFactory.flyweights)) {
      FlyweightFactory.flyweights[code] = new Flyweight(code);
    }
    return FlyweightFactory.flyweights[code];
  }

  static getCount(): number {
    return Object.keys(FlyweightFactory.flyweights).length;
  }
}
