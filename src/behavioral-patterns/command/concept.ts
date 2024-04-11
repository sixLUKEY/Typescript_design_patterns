// Command Pattern Concept

interface ICommand {
  execute(): void;
}

class Invoker {
  protected commands: { [id: string]: ICommand };

  constructor() {
    this.commands = {};
  }

  /** @method register() registers commands in the invoker  */
  register(commandName: string, command: ICommand) {
    this.commands[commandName] = command;
  }
  /** @method execute() executes any registered commands */
  execute(commandName: string) {
    if (commandName in this.commands) {
      this.commands[commandName].execute();
    } else {
      console.log(`Command [${commandName}] not recognised`);
    }
  }
}

class Receiver {
  runCommand1() {
    console.log("Executing command 1");
  }

  runCommand2() {
    console.log("Executing command 2");
  }
}

/** @description A Command object that implements the ICommand interface and runs the command on the designated receiver */
class Command1 implements ICommand {
    protected receiver: Receiver

    constructor(receiver: Receiver){
        this.receiver = receiver
    }

    execute(): void {
        this.receiver.runCommand1()
    }
}

/** @description A Command object that implements the ICommand interface and runs the command on the designated receiver */
class Command2 implements ICommand {
    protected receiver: Receiver

    constructor(receiver: Receiver){
        this.receiver = receiver
    }

    execute(): void {
        this.receiver.runCommand2()
    }
}

// Client side
const RECEIVER = new Receiver()

const CMD1 = new Command1(RECEIVER)
const CMD2 = new Command2(RECEIVER)

const INVOKER = new Invoker()
INVOKER.register('1', CMD1)
INVOKER.register('2', CMD2)

INVOKER.execute('1')
INVOKER.execute('2')
INVOKER.execute('1')
INVOKER.execute('2')