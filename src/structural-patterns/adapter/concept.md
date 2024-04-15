# Source Code

In this concept source code, there are two classes, `ClassA` and `ClassB`, with different method signatures. Let's consider that `ClassA` provides the most compatible and preferred interface for the client.

I can create objects of both classes in the client, and it works. But before using each objects method, I need to do a conditional check to see which type of class it is that I am calling since the method signatures are different.

It means that the client is doing extra work. Instead, I can create an Adapter interface for the incompatible `ClassB`, that reduces the need for the extra conditional logic.
