// The State Pattern concept

class Context {
  // This is the object whose behaviour will change
  protected stateHandles: IState[];
  protected handle: IState | undefined;

  constructor() {
    this.stateHandles = [
      new ConcreteStateA(),
      new ConcreteStateB(),
      new ConcreteStateC(),
    ];
    this.handle = undefined;
  }

  /** A method of the state that dynamically changes which class it uses depending on the value of this.handle */
  request() {
    this.handle = this.stateHandles[Math.floor(Math.random() * 3)];
    return this.handle;
  }
}

interface IState {
  toString(): string;
}

class ConcreteStateA implements IState {
  toString(): string {
    return `I am ConcreteStateA`;
  }
}

class ConcreteStateB implements IState {
  toString(): string {
    return `I am ConcreteStateB`;
  }
}

class ConcreteStateC implements IState {
  toString(): string {
    return `I am ConcreteStateC`;
  }
}

// Client side
const CONTEXT = new Context()
console.log(CONTEXT.request())
console.log(CONTEXT.request())
console.log(CONTEXT.request())
console.log(CONTEXT.request())
console.log(CONTEXT.request())