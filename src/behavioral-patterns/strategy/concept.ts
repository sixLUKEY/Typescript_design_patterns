// The Strategy Pattern Concept

class ObjectContext {
    // The object whose behaviour will change

    request(strategy: IStrategyConstructor){
        // The request is handled by the class passed in
        return new strategy()
    }
}

interface IStrategyConstructor {
    new(): IStrategy
}

interface IStrategy {
    method(): string
}

class ConcreteStrategyA implements IStrategy {
    // A concrete strategy subclass

    method(): string {
        return `I am ConcreteStrategyA`
    }
}

class ConcreteStrategyB implements IStrategy {
    // A concrete strategy subclass

    method(): string {
        return `I am ConcreteStrategyB`
    }
}

class ConcreteStrategyC implements IStrategy {
    // A concrete strategy subclass

    method(): string {
        return 'I am ConcreteStrategyC'
    }
}

// Client side
const OBJECT_CONTEXT = new ObjectContext()

console.log(OBJECT_CONTEXT.request(ConcreteStrategyA).method())
console.log(OBJECT_CONTEXT.request(ConcreteStrategyB).method())
console.log(OBJECT_CONTEXT.request(ConcreteStrategyC).method())