export type InputData = "text" | "json";
export type StrategyInput = "db" | "q";

export interface IInputHandler {
  handleInput(input: string | JSON): void;
}

export interface IProcessingStrategy {
  process(data: any): void;
}

export interface IObserver {
  update(subject: ISubject): void;
}

export interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

export interface ICommand {
  execute(): void;
}
