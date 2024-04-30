import { ProcessInputCommand } from "./app.commands";
import { Configuration } from "./app.config";
import { InputEventListener, InputEventPublisher } from "./app.events";
import { InputHandlerFactory } from "./app.handlers";
import { InputProcessor } from "./app.strategy";

// Client code
const config = Configuration.getInstance({ src: "~/.zshrc" });
const processor = new InputProcessor("db");
const publisher = new InputEventPublisher();
const listener = new InputEventListener();
const processCommand = new ProcessInputCommand(processor, '{"hi":"Hello"}');

publisher.attach(listener);

// Simulate input
const input = '"hi":"Hello"}';
const inputHandler = InputHandlerFactory.createInputHandler(input);
inputHandler.handleInput(input);
processCommand.execute();
publisher.notify();
