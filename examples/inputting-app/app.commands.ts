import { ICommand } from "./app.interfaces";
import { InputProcessor } from "./app.strategy";

export class ProcessInputCommand implements ICommand {
  constructor(private processor: InputProcessor, private data: any) {}

  execute(): void {
      this.processor.processInput(this.data)
  }
}
