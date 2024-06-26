# Overview

Not to be confused with object state, i.e., one of more attributes that can be copied as a snapshot, the **State Pattern** is more concerned about changing the handle of an object's method dynamically. This makes an object itself more dynamic and may reduce the need of many conditional statements.

Instead of storing a value in an attribute, and then using conditional statements within an objects' method to produce different output, a subclass is assigned as a handle instead. The object/context doesn't need to know about the inner working of the assigned subclass that the task was delegated to.

In the state pattern, the behavior of an objects state is encapsulated within the subclasses that are dynamically assigned to handle it.

## Terminology

- **State Interface**: An interface for encapsulating the behavior associated with a particular state of the Context.
- **Concrete Subclasses**: Each subclass implements a behavior associated with the particular state.
- **Context**: This is the object where the state is defined, but the execution of the state behavior is redirected to the concrete subclass.
