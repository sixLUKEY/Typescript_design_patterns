# Visitor Use Case

In the example, the client creates a car with parts.

The car and parts inherit an abstract car parts class with predefined property getters and setters.

Instead of creating methods in the car parts classes and abstract class that run bespoke methods, the car parts can all implement the IVisitor interface.

This allows for the later creation of Visitor objects to run specific tasks on the existing hierarchy of objects.
