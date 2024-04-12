# Mediator Use Case

In this example use case, we will implement some behavior into the mediation process.

Before the mediation logic is added, consider that the below example is a series of components all subscribed to a central location being the subject. They all implement the Observer pattern.

Each component is updated independently by external forces, but when it has new information, it notifies the subject which in turn then notifies the other subscribed components.

During the synchronization of all the subscribed components, without the extra mediation, the component that provided the new information will receive back the same message that it just notified the subject of. In order to manage the unnecessary duplicate message, the notifications will be mediated to exclude to component where the original message originated from.
