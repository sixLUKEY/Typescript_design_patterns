// The Save/Restore Game functionality

import GameCharacter from "./game-character";
import Memento from "./memento";

export default class CareTaker {
  // Guardian. Provides a narrrow interface to the mementos

  protected originator: GameCharacter;
  protected mementos: Memento[];

  constructor(originator: GameCharacter) {
    this.originator = originator;
    this.mementos = [];
  }

  /** Store a new Memento of the Characters current state */
  save(): void {
    console.log("CareTaker: Game Save");
    const memento = this.originator.getMemento();
    this.mementos.push(memento);
  }

  /** Replace the Characters current attributes with the state stored in the saved Memento */
  restore(index: number): void {
    console.log("CareTaker: Restoring Characters attributes from Memento");
    const memento = this.mementos[index];
    this.originator.setMemento(memento);
  }
}
