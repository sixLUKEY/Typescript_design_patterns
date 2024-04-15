import IVisitable from "./ivisitable";
import IVisitor from "./ivisitor";

/** The abstract car part */
export default abstract class AbstractCarPart implements IVisitable {
  protected _name: string;
  protected _sku: string | undefined;
  protected _price: number | undefined;

  constructor(name: string, sku?: string, price?: number) {
    this._name = name;
    this._sku = sku;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get sku(): string | undefined {
    return this._sku;
  }

  public set sku(value: string | undefined) {
    this._sku = value;
  }

  public get price(): number | undefined {
    return this._price;
  }

  public set price(value: number | undefined) {
    this._price = value;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this);
  }
}
