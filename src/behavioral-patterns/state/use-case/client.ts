// The State use case example

enum ExampleState {
  Initialising = "Initialising",
  Started = "Started",
  Running = "Running",
  Finished = "Finished",
}

interface IExampleState {
  request(): void;
}

class StateContext implements IExampleState {
  protected _state: ExampleState;

  constructor() {
    this._state = ExampleState.Initialising;
  }

  public get state() {
    return this._state;
  }

  public set state(value: ExampleState) {
    switch (value) {
      case ExampleState.Started:
        this.request = Started.prototype.request;
        break;
      case ExampleState.Running:
        this.request = Running.prototype.request;
        break;
      case ExampleState.Finished:
        this.request = Finished.prototype.request;
        break;
    }
    this._state = value;
  }

  /** Does nothing until state changes, when then this method handle is reassigned to a different concrete states request method */
  request(): void {}
}

class Started implements IExampleState {
  // Concrete subclass
  request(): void {
    console.log(`I am now Started.`);
  }
}

class Running implements IExampleState {
  // Concrete subclass
  request(): void {
    console.log(`I am now Running.`);
  }
}

class Finished implements IExampleState {
  // Concrete subclass
  request(): void {
    console.log(`I am now Finished.`);
  }
}

// Client side
const STATE_CONTEXT = new StateContext()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ExampleState.Started
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Running
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Finished
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Started
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Running
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Finished
STATE_CONTEXT.request()