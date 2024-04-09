// Factory B sample code

export interface IProductB {
    name: string;
  }
  
  class ConcreteProduct implements IProductB {
    name = "";
  }
  
  class ConcreteProductA extends ConcreteProduct {
    constructor() {
      super();
      this.name = "FactoryB:ConcreteProductA";
    }
  }
  
  class ConcreteProductB extends ConcreteProduct {
    constructor() {
      super();
      this.name = "FactoryB:ConcreteProductB";
    }
  }
  
  class ConcreteProductC extends ConcreteProduct {
    constructor() {
      super();
      this.name = "FactoryB:ConcreteProductC";
    }
  }
  
  export class FactoryB {
    static getObject(someProperty: string): IProductB {
      try {
        if (someProperty === "a") {
          return new ConcreteProductA();
        } else if (someProperty === "b") {
          return new ConcreteProductB();
        } else if (someProperty === "c") {
          return new ConcreteProductC();
        } else {
          throw new Error("Class not Found");
        }
      } catch (err) {
        console.error(err);
      }
      return new ConcreteProduct();
    }
  }
  