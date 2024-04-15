# Bridge Use Case

In this example, I draw a square and a circle. Both of these can be categorized as shapes.

The shape is set up as the abstraction interface. The refined abstractions, Square and Circle, implement the IShape interface.

When the Square and Circle objects are created, they are also assigned their appropriate implementers being SquareImplementer and CircleImplementer.

When each shape's draw method is called, the equivalent method within their implementer is called.

The Square and Circle are bridged and each implementer and abstraction can be worked on independently.
