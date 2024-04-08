// Factory Concept

interface IProduct {
  name: string;
}

class ConcreteProduct implements IProduct {
  name: string;
  constructor() {
    this.name = "";
  }
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "Product A";
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "Product B";
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "Product C";
  }
}

class Creator {
  static createObject(someProperty: string): IProduct {
    if (someProperty === "a") {
      return new ConcreteProductA();
    } else if (someProperty === "b") {
      return new ConcreteProductB();
    } else {
      return new ConcreteProductC();
    }
  }
}

// Client side
const PRODUCT = Creator.createObject("b");
console.log(PRODUCT.name);
