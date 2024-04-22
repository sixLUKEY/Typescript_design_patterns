/**
 * The Abstract Factory interface declares a set of methods that return different abstract products.
 * These products are called a family and are related by a high-level theme or concept. Products of
 * one family are usually able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of another.
 */
export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

/**
 * Concrete Factories produce a family of products that belong to a single variant. The factory guarantees
 * that resulting products are compatible. Note that signatures of the Concrete Factory's methods return
 * an abstract product, while inside the method a concrete product is instatntiated.
 */
export class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

/**
 * Eaxh Concrete Factory has a corresponding product variant.
 */
export class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

/**
 * Each distinct product of a product family should have a base interface. All variants of the product
 * must implement this interface.
 */
export interface AbstractProductA {
  usefulFunctionA(): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
export class ConcreteProductA1 implements AbstractProductA {
  usefulFunctionA(): string {
    return `The result of product A1.`;
  }
}

export class ConcreteProductA2 implements AbstractProductA {
  usefulFunctionA(): string {
    return `The result of product A2.`;
  }
}

/**
 * Here's the base interface of another product. All products can interact with each other, but proper
 * interaction is possible only between products of the same concrete variant.
 */
export interface AbstractProductB {
  /**
   * Product B is able to do its own thing ...
   */
  usefulFunctionB(): string;

  /**
   * ... but it can also collaborate with ProductA
   *
   * The Abstract Factory makes sure that all products it creates are of the same variant and thus, compatible.
   *
   * @param collaborator instance of ProductA
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
export class ConcreteProductB1 implements AbstractProductB {
  usefulFunctionB(): string {
    return `The result of the product B1.`;
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant, Product A1. Nevertheless, 
   * it accepts any instance of AbstractProductA as an argument
   * 
   * @param collaborator instance of ProductA
   * @returns string 
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

export class ConcreteProductB2 implements AbstractProductB {
  usefulFunctionB(): string {
    return `The result of the product B2.`;
  }

  /**
   * The variant, Product B2, is only able to work correctly with variant, Product A2. Nevertheless, 
   * it accepts any instance of AbstractProductA as an argument.
   * 
   * @param collaborator instance of ProductA
   * @returns string
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

