import IVisitor from "./ivisitor";

/** An interface that the concrete objects should implement that allows the visitor to traverse a hierarchical structure of objects */
export default interface IVisitable {
    accept(visitor: IVisitor): void
}