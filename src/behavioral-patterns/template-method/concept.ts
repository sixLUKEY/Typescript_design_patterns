// The template Method Pattern concept

/** Template class containing a template method and primitive methods */
abstract class AbstractClass {
  /** Hooks are normally empty in the abstract class. The implementing class can optionally override providing a custom implementation. */
  stepOne(): void {}

  /** An abstract method that must be overridden in the implementing class. It has been given '@abstractmethod' decorator so that pylint shows the error. */
  abstract stepTwo(): void;

  /** Hooks can also contain default behaviour and can be optionally overridden. */
  stepThree(): void {
    console.log(`Step Three is a hook that prints this line by default`);
  }

  /** This is the template method that the subclass will call. The subclass (Implementing class) doesn't need to override this method since it would have already optionally overridden the following methods with its own implementation. */
  templateMethod() {
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }
}

/** A concrete class that only overrides step two */
class ConcreteClassA extends AbstractClass {
  stepTwo(): void {
    console.log("Class_A : Step Two (overridden)");
  }
}

/** A concrete class that only overrides steps one, two and three */
class ConcreteClassB extends AbstractClass {
  stepOne(): void {
    console.log(`Class_B : Step One (overridden)`);
  }

  stepTwo(): void {
    console.log(`Class_B : Step Two (overridden)`);
  }

  stepThree(): void {
    console.log(`Class_B : Step Three (overridden)`);
  }
}

// Client side
const CLASS_A = new ConcreteClassA();
CLASS_A.templateMethod();

const CLASS_B = new ConcreteClassB();
CLASS_B.templateMethod();
