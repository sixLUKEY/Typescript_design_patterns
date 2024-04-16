# Summary

- State should not be managed in the Command object itself.
- There can be one or more Invokers that can execute the Command at a later time.
- The Command object is especially useful if you want to UNDO/REDO commands at later time.
- The Command pattern is similar to the Memento pattern in the way that it can also be used for UNDO/REDO purposes. However, the Memento pattern is about recording and replacing the state of an object, whereas the Command pattern executes a predefined command. E.g., Draw, Turn, Resize, Save, etc.
