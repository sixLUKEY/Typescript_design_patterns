# Abstract Factory Example Use Case

An example use case may be that you have a furniture shopfront. You sell many kinds of furniture. You sell chairs and tables. And they are manufactured at different factories using different unrelated processes that are not important for your concern. You only need the factory to deliver.

You can create an extra module called FurnitureFactory, to handle the chair and table factories, thus removing the implementation details from the client.
