# Source Code

In the concept code below, a hierarchy of any object is created. It is similar to a simplified composite. The objects of `Part` can also contain a hierarchy of sub elements/parts.

The `Part` class could also consist of many variations, but this example uses only one.

Rather than writing specific code inside all these elements/parts every time I wanted to handle a new custom operation, I can implement the `IVisitable` interface and create the `accept()` method that allows the custom Visitor to pass through it and access the Elements/Parts internal attributes instead.

Two different Visitor classes are created, `PrintPartNamesVisitor` and `CalculatePartTotalsVisitor`. They are instantiated and passed through the existing Object hierarchy using the same `IVisitable` interface.
