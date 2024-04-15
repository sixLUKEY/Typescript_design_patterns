# Summary

Use when you want to separate a solution where the abstraction and implementation may be tightly coupled, and you want to break it up into smaller conceptual parts.
Once you have added the bridge abstraction, you should be able to extend each side of it separately without breaking the other.
Also, once the bridge abstraction exists, you can more easily create extra concrete implementations for other similar products that may also happen to be split across similar conceptual lines.
The Bridge pattern is similar to the adapter pattern except in the intent that you developed it. The bridge is an approach to refactor already existing code, whereas the adapter adapts to the existing code through its existing interfaces and methods without changing the internals.
