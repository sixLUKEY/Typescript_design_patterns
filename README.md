# Design Patterns in Typescript

## Creational Patterns

- ### Factory

  Abstraction between the creation of an object and where it is used.

- ### Abstract Factory

  Adds an abstraction over many other related objects that are created using other creational patterns.

- ### Builder

  A creational pattern whose intent is to separate the construction of a complex object from its representation so that you can use the same construction process to create different representations.

- ### Prototype

  Good for when creating new objects requires more resources than you need or have available.

- ### Singleton

  A class that can be instanced at any time, but after it is first instanced, any new instances will point to the original instance.

## Structural Patterns

- ### Decorator

  Attach additional responsibilities to an object at runtime.

- ### Adapter

  An alternative interface over an existing interface.

- ### Facade

  An alternative or simplified interface over other interfaces.

- ### Bridge

  The Bridge pattern is similar to the Adapter pattern except in the intent that you developed it.

- ### Composite

  A structural pattern useful for hierarchical management.

- ### Flyweight

  Share objects rather than creating thousands of near identical copies.

- ### Proxy

  A class functioning as an interface to another class or object.

## Behavioral Patterns

- ### Command

  An abstraction between an object that invokes a command, and the object that performs it. Useful for UNDO/REDO/REPLAY.

- ### Chain of Responsibility

  Pass an object through a chain of successor handlers.

- ### Observer

  Manage a list of dependents and notifies them of any internal state changes.

- ### Interpreter

  Convert information from one language to another.

- ### Iterator

  Traverse a collection of aggregates.

- ### Mediator

  Objects communicate through a Mediator rather than directly with each other.

- ### Memento

  Save a copy of state and for later retrieval. Useful for UNDO/REDO/LOAD/SAVE.

- ### State

  Alter an objects' behavior by changing the handle of one of its methods to one of its subclasses dynamically to reflect its new internal state.

- ### Strategy

  Similar to the State Pattern, except that the client passes in the algorithm that the context should then run.

- ### Template Method

  An abstract class (template) that contains a method that is a series of instructions that are a combination of methods that can be overridden.

- ### Visitor

  Pass an object called a visitor to a hierarchy of objects and execute a method on them.
