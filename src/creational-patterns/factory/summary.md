# Summary

The Factory Pattern defers the creation of the final object to a subclass.
The Factory pattern is about inserting another layer/abstraction between instantiating an object and where in your code it is actually used.
It is unknown what or how many objects you will need to be created until runtime.
You want to localize knowledge of the specifics of instantiating a particular object to the subclass so that the client doesn't need to be concerned about the details.
You want to create an external framework, that an application can import/reference, and hide the details of the specifics involved in creating the final object/product.
The unique factor that defines the Factory pattern, is that your project now defers the creation of objects to the subclass that the factory had delegated it to.
