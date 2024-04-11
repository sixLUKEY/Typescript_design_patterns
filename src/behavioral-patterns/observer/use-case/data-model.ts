import { IDataView } from "./data-view";
import { IDataController, DataController } from "./data-controller";

export interface IDataModel {
  // A subject interface
  subscribe(observer: IDataView): number;
  unsubscribe(observerId: number): void;
  notify(data: number[]): void;
}

/** The Subject a.k.a Observable */
export class DataModel implements IDataModel {
  protected observers: { [id: number]: IDataView } = {};
  protected dataController: IDataController;
  protected counter: number;

  constructor() {
    this.counter = 0;
    this.dataController = new DataController();
    this.dataController.subscribe(this);
  }

  subscribe(observer: IDataView): number {
    this.counter++;
    this.observers[this.counter] = observer;
    return this.counter;
  }

  unsubscribe(observerId: number): void {
    delete this.observers[observerId];
  }

  notify(data: number[]): void {
    Object.keys(this.observers).forEach((obs) => {
      this.observers[parseInt(obs)].notify(data);
    });
  }
}
