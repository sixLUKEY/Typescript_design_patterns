// Adapter concept sample code

interface IA {
  methodA(): void;
}

class ClassA implements IA {
  methodA(): void {
    console.log("method A");
  }
}

interface IB {
  methodB(): void;
}

class ClassB implements IB {
  methodB(): void {
    console.log("method B");
  }
}

class ClassBAdapter implements IA {
  // ClassB does not have methodA so we create an adapter
  protected classB: ClassB;

  constructor() {
    this.classB = new ClassB();
  }

  /**
   * Calls ClassB methodB() instead
   */
  methodA(): void {
    this.classB.methodB();
  }
}

// Client side
// Before the adapter we need to test the objects class to know which method to call
const ITEMS = [new ClassA(), new ClassB()];
ITEMS.forEach((item) => {
  if (item instanceof ClassB) {
    item.methodB();
  } else {
    item.methodA();
  }
});

// After creating an adapter for ClassB we can reuse the same method signature as ClassA (preferred)
const ADAPTED = [new ClassA(), new ClassBAdapter()];
ADAPTED.forEach((item) => {
  item.methodA();
});
