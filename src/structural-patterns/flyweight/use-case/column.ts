// A column that is used in a row

import FlyweightFactory from "./flyweight-factory";

/**
 *  @description the columns are contexts. They will share the Flyweights via the FlyweightsFactory
 *  @method getData() get the flyweight value from the factory and apply the extrinsic values
 */
export default class Column {
  data = "";
  width = 10;
  justify = 0;

  getData(): string {
    const codes: number[] = [];
    for (let i = 0; i < this.data.length; i++) {
      codes.push(this.data.charCodeAt(i));
    }
    let ret = "";
    Array.from(codes).forEach((c) => {
      ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
    });

    switch (this.justify) {
      case 1:
        ret = this.leftAlign(this.width, ret, " ");
        break;
      case 2:
        ret = this.rightAlign(this.width, ret, " ");
        break;
      default:
        ret = this.center(this.width, ret, " ");
    }

    return ret
  }

  center(width: number, string: string, padding: string): string {
    return width <= string.length
      ? string
      : this.centerAlternate(width, padding + string, padding);
  }
  centerAlternate(width: number, string: string, padding: string): string {
    return width <= string.length
      ? string
      : this.center(width, string + padding, padding);
  }
  leftAlign(width: number, string: string, padding: string): string {
    return width <= string.length
      ? string
      : this.leftAlign(width, string + padding, padding);
  }
  rightAlign(width: number, string: string, padding: string): string {
    return width <= string.length
      ? string
      : this.rightAlign(width, padding + string, padding);
  }
}
