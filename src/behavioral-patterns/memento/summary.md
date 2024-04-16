# Summary

- You don't need to create a new Memento each time an Originators state changes. You can do it only when considered necessary. E.g., an occasional backup to a file.
- Mementos can be stored in memory or saved/cached externally. The Caretaker will abstract the complications of storing and retrieving Mementos from the Originator.
- Consider the Command pattern for fine-grained changes to an objects state to manage UNDO/REDO between memento saves. Or even save command history into a Memento that can be later replayed.
- In my examples, the whole state is recorded and changed with the Memento. You can use the Memento to record and change partial states instead if required.
- When copying state, be aware of shallow/deep copying. In complicated projects, your restore functionality will probably contain a combination of both the Command and Memento patterns.
