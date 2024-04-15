# Summary

Use when a change to one object requires changing others, and you don't know how many other objects need to be changed.
A subject has a list of observers, each conforming to the observer interface. The subject doesn't need to know about the concrete class of any observer. It will notify the observer using the method described in the interface.
Subjects and Observers can belong to any layer of a system whether extremely large or small.
Using a Push or Pull mechanism for the Observer will depend on how you want your system to manage redundancy for particular data transfers. These things become more of a consideration when the Observer is separated further away from a subject and the message needs to traverse many layers, processes and systems.
