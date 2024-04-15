# Overview

The Abstract Factory Pattern adds an abstraction layer over multiple other creational pattern implementations.

To begin with, in simple terms, think if it as a Factory that can return Factories. Although you will find examples of it also being used to return Builder, Prototypes, Singletons or other design pattern implementations.

## Terminology

**Client**: The client application that calls the Abstract Factory. It's the same process as the Concrete Creator in the Factory design pattern.

**Abstract Factory**: A common interface over all the sub factories.

**Concrete Factory**: The sub factory of the Abstract Factory and contains method(s) to allow creating the Concrete Product.

**Abstract Product**: The interface and/or abstraction for the product that the sub factory returns.

**Concrete Product**: The object that is finally returned.
