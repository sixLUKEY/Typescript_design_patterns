# Summary

- Makes an object change its behavior when its internal state changes.
- The client and the context are not concerned about the details of how the state is created/assembled/calculated. The client will call a method of the context, and it will be handled by a subclass.
- The State pattern appears very similar to the Strategy pattern, except in the State pattern, the object/context has changed to a different state and will run a different subclass depending on that state.
