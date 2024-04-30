import { IProcessingStrategy, StrategyInput } from "./app.interfaces";

class SaveToDatabase implements IProcessingStrategy {
  process(data: any): void {
    console.log(`Saving data to the database : ${data}`);
  }
}

class SendToQueue implements IProcessingStrategy {
  process(data: any): void {
    console.log(`Sending data to the message queue : ${data}`);
  }
}

export class InputProcessor {
  private strategy: IProcessingStrategy;

  /**
   *
   * @param _strategy string ( 'db' | 'q' )
   */
  constructor(_strategy: StrategyInput) {
    _strategy === "db"
      ? (this.strategy = new SaveToDatabase())
      : (this.strategy = new SendToQueue());
  }

  setStrategy(_strategy: StrategyInput) {
    _strategy === "db"
      ? (this.strategy = new SaveToDatabase())
      : (this.strategy = new SendToQueue());
  }

  processInput(data: any): void {
    this.strategy.process(data);
  }
}
