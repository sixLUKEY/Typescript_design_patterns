# Source Code

The Client instantiates a Receiver that accepts certain commands that do things.

The Client then creates two Command objects that will call one of the specific commands on the Receiver.

The Client then creates an Invoker, E.g., a user interface with buttons, and registers both Commands into the Invokers' dictionary of commands.

The Client doesn't call the receivers commands directly, but the via the Invoker, that then calls the registered Command objects `execute()` method.

This abstraction between the invoker, command and receiver, allows the Invoker to add extra functionality such as history, replay, UNDO/REDO, logging, alerting and any other useful things that may be required.
