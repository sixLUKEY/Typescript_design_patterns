# Summary

To be a Singleton, there must only be one copy of the Singleton, no matter how many times, or in which class it was instantiated.
You want the attributes or methods to be globally accessible across your application, so that other classes may be able to use the Singleton.
You can use Singletons in other classes, as I did with the leaderboard, and they will all use the same Singleton instance regardless.
You want controlled access to a sole instance.
A singleton differs from a class containing just static methods and properties in the way that you can make your Singleton implement an interface and/or extend a base class. You also create an instance of a Singleton at runtime using the new keyword.
