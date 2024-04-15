# Overview

Your object structure inside an application may be complicated and varied. A good example is what could be created using the Composite structure.

The objects that make up the hierarchy of objects, can be anything and most likely complicated to modify as your application grows.

Instead, when designing the objects in your application that may be structured in a hierarchical fashion, you can allow them to implement a Visitor interface.

The Visitor interface describes an accept() method that a different object, called a Visitor, will use in order to traverse through the existing object hierarchy and read the internal attributes of an object.

The Visitor pattern is useful when you want to analyze, or reproduce an alternative object hierarchy without implementing extra code in the object classes, except for the original requirements set by implementing the Visitor interface.

Similar to the template pattern it could be used to output different versions of a document but more suited to objects that may be members of a hierarchy.

## Terminology

Visitor Interface: An interface for the Concrete Visitors.
Concrete Visitor: The Concrete Visitor will traverse the hierarchy of elements.
Concrete Element: (Part) An object that will be visited. An application will contain a variable number of Elements/Parts that can be structured in any particular hierarchy.
Visitable Interface: The interface that elements/parts should implement, that describes the accept() method that will allow them to be visited (traversed).
