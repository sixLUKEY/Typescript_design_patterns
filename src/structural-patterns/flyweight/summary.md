# Summary

Clients should access Flyweight objects only the through a FlyweightFactory object to ensure that they are shared.
Intrinsic values are stored internally in the Flyweight.
Extrinsic values are passed to the Flyweight and customize it depending on the context.
Implementing the flyweight is a balance between storing all objects in memory, versus storing small unique parts in memory, and potentially calculating extrinsic values in the context objects.
Use the flyweight to save memory when it is beneficial. The offset is that extra CPU may be required during calculating and passing extrinsic values to the flyweights.
The flyweight reduces memory footprint because it shares objects and allows the possibility of dynamically creating extrinsic attributes.
The contexts will generally calculate the extrinsic values used by the flyweights, but it is not necessary. Values can be stored or referenced from other objects if necessary.
When architecting the flyweight, start with considering which parts of a common object may be able to be split and applied using extrinsic attributes.
