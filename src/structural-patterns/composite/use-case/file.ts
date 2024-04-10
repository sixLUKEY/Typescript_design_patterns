import IComponent from "./icomponent";
import Folder from "./folder";
/**
 *  Files act as leaves
 */
export default class File implements IComponent {
  name: string;
  referenceToParent?: Folder | undefined;

  constructor(name: string) {
    this.name = name;
  }

  dir(indent: string): void {
    console.log(`${indent}<FILE> ${this.name}`);
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}
