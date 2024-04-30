import { IInputHandler, InputData } from "./app.interfaces";

class TextInputHandler implements IInputHandler {
  handleInput(input: string): void {
    console.log(`Handling text input : ${input}`);
  }
}

class JSONInputHandler implements IInputHandler {
  handleInput(input: string): void {
    console.log(`Handling JSON Input : ${JSON.parse(input)}`);
  }
}

export class InputHandlerFactory {
  /**
   *
   * @param type string ( 'json' | 'text' )
   * @returns TextHandler or JSONHandler
   */
  static createInputHandler(input: string): IInputHandler {
    try {
      JSON.parse(input);
      return new JSONInputHandler();
    } catch (err) {
      return new TextInputHandler();
    }
  }
}
