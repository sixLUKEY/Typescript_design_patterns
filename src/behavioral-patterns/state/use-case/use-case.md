# State Use Case

This example takes the concept example further and instead assigns then next state in sequence rather than choosing the states subclasses randomly.

It also allows to set the state outside the context by using a getter/setter.

The client will set the state, and then run a request, and then change the state again, etc., and depending on the state, the behavior of the method would have changed.
