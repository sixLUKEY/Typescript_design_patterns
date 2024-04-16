# Source Code

In the example concept, there are two colleague classes that use each other's methods. Instead of the Colleagues calling each other's methods directly, they implement the Mediator interface and call each other via the Mediator. Each colleague is designed for a different purpose, but they utilize some related functionality from each other.

The system, in this case, would work without the Mediator, but adding the Mediator would allow extending functionality to a potential third colleague that provides a different service, such as AI analysis or monitoring, without needing to add specific support or knowledge into the two original colleagues.

In this first example the Mediator is structurally acting as a multi-directional relay between the two colleagues.
