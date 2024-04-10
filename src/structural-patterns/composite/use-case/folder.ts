import IComponent from "./icomponent";
/**
 * @method attach() detaches leaf / composite from any current parent reference and then set the parent reference to this composite
 * @method delete() removes leaf / composite from THIS composite, 'this.components'
 */
export default class Folder implements IComponent {
  // A composite can contain leaves and composites

  referenceToParent?: Folder;
  name: string;
  components: IComponent[];

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }

  dir(indent: string): void {
    console.log(`${indent}<DIR>  ${this.name}`);

    this.components.forEach((c) => c.dir(indent + ".."));
  }

  attach(component: IComponent): void {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  delete(component: IComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}
