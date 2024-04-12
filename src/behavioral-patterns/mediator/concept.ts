// Mediator Concept sample code

class Mediator {
  // Mediator concrete class
  colleague1: Colleague1;
  colleague2: Colleague2;

  constructor() {
    this.colleague1 = new Colleague1();
    this.colleague2 = new Colleague2();
  }

  colleague1Method() {
    // Calls method provided by Colleague1
    return this.colleague1.method1();
  }

  colleague2Method() {
    // Calls method provided by Colleague2
    return this.colleague2.method2();
  }
}

class Colleague1 {
  // Provides data for Colleague2

  method1() {
    return "Here is the Colleague1 specific data you asked for";
  }
}

class Colleague2 {
  // Provides data for Colleague1

  method2() {
    return "Here is the Colleague2 specific data you asked for";
  }
}

// Client side
const MEDIATOR = new Mediator();

// Colleague1 wants some data from Colleague2
let DATA = MEDIATOR.colleague2Method();
console.log(`COLLEAGUE1 <--> ${DATA}`);

// Colleague2 wants some data from Colleague1
DATA = MEDIATOR.colleague1Method();
console.log(`COLLEAGUE2 <--> ${DATA}`);
