// The Switch ( Invoker ) class

import ICommand from "./icommand";

export default class Switch {
  protected commands: { [id: string]: ICommand };
  protected history: [number, string][];

  constructor() {
    this.commands = {};
    this.history = [];
  }

  /** @method printHistory() prints the history of each time a command was invoked */
  showHistory(): void {
    this.history.forEach((row) => {
      console.log(`${row[0]} : ${row[1]}`);
    });
  }

  /** @method register() registers commands in the invoker */
  register(commandName: string, command: ICommand): void {
    this.commands[commandName] = command;
  }

  /** @method execute() executes any registered commands */
  execute(commandName: string): void {
    if (commandName in this.commands) {
      this.commands[commandName].execute();
      this.history.push([Date.now(), commandName]);
    } else {
      console.log(`Command [${commandName}] not recognised`);
    }
  }

  /** @method replayLast() replays the last n commands */
  replayLast(numberOfCommands: number): void {
    const commands = this.history.slice(
      this.history.length - numberOfCommands,
      this.history.length
    );
    commands.forEach((cmd) => {
      this.commands[cmd[1]].execute();
      /**
       * Or if you want to also record the replay in history
       * @example this.execute(cmd1])
       */
    });
  }
}
