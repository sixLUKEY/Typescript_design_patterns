import AbstractCarPart from "./abstract-car-part";

/** An interface that custom Visitors should implement */
export default interface IVisitor {
  visit(abstractCarPart: AbstractCarPart): void;
}
