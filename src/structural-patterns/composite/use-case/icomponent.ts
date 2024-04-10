import Folder from "./folder";
/**
 * A component interface describing the common fields and methods of leaves and composites
 * 
 * @method dir() each leaf and container should implement
 * @method detach() detach the composite from its parent composite
 */
export default interface IComponent {
  referenceToParent?: Folder;

  dir(indent: string): void;
  detach(): void;
}
