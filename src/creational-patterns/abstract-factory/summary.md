# Summary

- Use when you want to provide a library of relatively similar products from multiple different factories.
- You want the system to be independent of how the products are created.
- It fulfills all the same use cases as the Factory method, but is a factory for creational pattern type methods.
- The client implements the abstract factory interface, rather than all the internal logic and Factories. This allows the possibility of creating a library that can be imported for using the Abstract Factory.
- The Abstract Factory defers the creation of the final products/objects to its concrete factory subclasses.
- You want to enforce consistent interfaces across products.
- You want the possibility to exchange product families.
