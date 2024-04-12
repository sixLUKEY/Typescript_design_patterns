// The subject that all components will stay in sync with

import IComponent from "./icomponent";

export default class Mediator {
  // A subject whose notify method is mediated
  protected components: Set<IComponent>;

  constructor() {
    this.components = new Set();
  }

  add(component: IComponent) {
    this.components.add(component);
  }

  notify(message: string, originator: IComponent): void {
    // Add components except for the originator components
    this.components.forEach((comp) => {
      if (comp !== originator) {
        comp.receive(message);
      }
    });
  }
}
