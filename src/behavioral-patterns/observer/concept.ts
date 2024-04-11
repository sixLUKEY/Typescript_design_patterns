// Observer Design Pattern Concept

/** The subject interface */
interface IObservable {
  subscribe(observer: IObserver): void;

  unsubscribe(observer: IObserver): void;

  notify(...args: unknown[]): void;
}

/** The observable */
class Subject implements IObservable {
  protected observers: Set<IObserver>;

  constructor() {
    this.observers = new Set();
  }

  subscribe(observer: any): void {
    this.observers.add(observer);
  }

  unsubscribe(observer: any): void {
    this.observers.delete(observer);
  }

  notify(...args: unknown[]): void {
    this.observers.forEach((obs) => {
      obs.notify(...args);
    });
  }
}

interface IObserver {
  notify(...args: unknown[]): void;
}

/** The concrete observer */
class Observer implements IObserver {
  protected id: number;

  constructor(observable: IObservable) {
    this.id = COUNTER++;
    observable.subscribe(this);
  }

  notify(...args: unknown[]): void {
    console.log(`OBSERVER_${this.id} received ${JSON.stringify(args)}`);
  }
}

// Client side
let COUNTER = 1; // An ID to help distinguish between objects

const SUBJECT = new Subject();
const OBSERVER_1 = new Observer(SUBJECT);
const OBSERVER_2 = new Observer(SUBJECT);

SUBJECT.notify("First Notification", [1, 2, 3]);

// Unsubscribe OBSERVER_2
SUBJECT.unsubscribe(OBSERVER_2);

SUBJECT.notify("Second Notification", { A: 1, B: 2, C: 3 });
