# Summary

In the Chain of Responsibility,

The object/payload will propagate through the chain until fully processed.
The object does not know which successor or how many will process it.
The next successor in the chain can either be chosen dynamically at runtime depending on logic from within the current successor, or hard coded if it is more beneficial.
Successors implement a common interface that makes them work independently of each other, so that they can be used recursively or possibly in a different order.
A user wizard, or dynamic questionnaire are other common use cases for the chain of responsibility pattern.
Consider the Chain of Responsibility pattern like the Composite pattern (structural) but with logic applied (behavioral).
