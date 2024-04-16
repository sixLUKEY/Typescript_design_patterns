# Observer Use Case

Most applications that involve a separation of data into a presentation layer can be broken further down into the Model-View-Controller (MVC) concept.

- **Controller** : The single source of truth.
- **Model** : The link or relay between a controller and a view. It may use any of the structural patterns (adapter, bridge, facade, proxy, etc.) at some point.
- **View** : The presentation layer of the data from the model.

The observer pattern can be used to manage the transfer of data across any layer and even internally to itself to add an abstraction. In the MVC structure, the View can be a subscriber to the Model, that in turn can also be a subscriber to the controller. It can also happen the other way around if the use case warrants.

This example mimics the **MVC** approach.

There is an external process called a `DataController`, and a client process that holds a `DataModel` and multiple `DataViews` that are a Pie graph, Bar graph and Table view.

Note that this example runs in a single process, but imagine that the `DataController` is actually an external process running on a different server.

The `DataModel` subscribes to the `DataController` and the `DataViews` subscribe to the `DataModel`.

The client sets up the various views with a subscription to the `DataModel`.

The hypothetical external `DataController` then updates the external data, and the data then propagates through the layers to the views.

Note that in reality this example would be much more complex if multiple servers are involved. I am keeping it brief to demonstrate one possible use case of the observer pattern.

Also note that in the `DataController`, the references to the observers are contained in a Set, while in the `DataModel` I have used a Dictionary instead, so that you can see an alternate approach.
