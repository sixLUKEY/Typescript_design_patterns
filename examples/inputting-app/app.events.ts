import { IObserver, ISubject } from "./app.interfaces";

export class InputEventPublisher implements ISubject {
  private observers: IObserver[] = [];

  attach(observer: IObserver): void {
    this.observers.push(observer);
  }

  detach(observer: IObserver): void {
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

export class InputEventListener implements IObserver {
  update(subject: ISubject): void {
    console.log(`InputEventListener received an update from, ${subject}`);
  }
}
