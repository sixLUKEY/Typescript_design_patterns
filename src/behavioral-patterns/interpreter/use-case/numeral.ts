import IAbstractExpression from "./iabstract-expression";

export default class Numeral implements IAbstractExpression {
  // Terminal expression

  value: number;

  constructor(value: string | number) {
    this.value = typeof value === "string" ? parseInt(value) : value;
  }

  interpret(): number {
    return this.value;
  }
}
