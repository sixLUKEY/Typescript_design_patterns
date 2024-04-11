import { IDataModel } from "./data-model";
export interface IDataView {
  notify(data: Array<number>): void;
  draw<T extends number[]>(data: T): void;
  delete(): void;
}

/** A concrete observer */
export class BarGraphView implements IDataView {
  protected observable: IDataModel;
  protected id: number;

  constructor(observable: IDataModel) {
    this.observable = observable;
    this.id = this.observable.subscribe(this);
  }

  notify(data: Array<number>): void {
    console.log(`BarGraph, id:${this.id}`);
    this.draw(data);
  }

  draw<T extends number[]>(data: T): void {
    console.log(`Drawing a Bar graph using data:${JSON.stringify(data)}`);
  }

  delete(): void {
    this.observable.unsubscribe(this.id);
  }
}

/** A concrete observer */
export class PieGraphView implements IDataView {
  protected observable: IDataModel;
  protected id: number;

  constructor(observable: IDataModel) {
    this.observable = observable;
    this.id = this.observable.subscribe(this);
  }

  notify(data: Array<number>): void {
    console.log(`PieGraph, id:${this.id}`);
    this.draw(data);
  }

  draw<T extends number[]>(data: T): void {
    console.log(`Drawing a pie graph using data:${data}`);
  }
  delete(): void {
    this.observable.unsubscribe(this.id);
  }
}

/** A concrete observer */
export class TableView implements IDataView {
  protected observable: IDataModel;
  protected id: number;

  constructor(observable: IDataModel) {
    this.observable = observable;
    this.id = this.observable.subscribe(this);
  }

  notify(data: Array<number>): void {
    console.log(`TableView, id:${this.id}`);
    this.draw(data);
  }

  draw<T extends number[]>(data: T): void {
    console.log(`Drawing a Table using data:${JSON.stringify(data)}`);
  }

  delete(): void {
    this.observable.unsubscribe(this.id);
  }
}
