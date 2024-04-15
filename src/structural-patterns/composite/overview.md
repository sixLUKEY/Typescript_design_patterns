# Overview

The Composite design pattern is a structural pattern useful for hierarchical management.

The Composite design pattern,

Allows you to represent individual entities(leaves) and groups of leaves as the same.
Is a structural design pattern that lets you compose objects into a changeable tree structure.
Is great if you need the option of swapping hierarchical relationships around.
Allows you to add/remove components to the hierarchy.
Provides flexibility of structure
Examples of using the Composite Design Pattern can be seen in a file system directory structure where you can swap the hierarchy of files and folders, and also in a drawing program where you can group, ungroup, transform objects and change multiple objects at the same time.

## Terminology

Component Interface: The interface that all leaves and composites should implement.
Leaf: A single object that can exist inside or outside a composite.
Composite: A collection of leaves and/or other composites.
