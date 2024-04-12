// The Game character whose state changes

import Memento from "./memento";

export default class GameCharacter {
  protected score: number;
  protected inventory: Set<string>;
  protected level: number;
  protected location: { x: number; y: number; z: number };

  constructor() {
    this.score = 0;
    this.inventory = new Set();
    this.level = 0;
    this.location = { x: 0, y: 0, z: 0 };
  }

  public getScore(): number {
    return this.score;
  }

  /**  The character kills its enemies as it progresses */
  registerKill(): void {
    this.score += 100;
  }

  /**  The character finds objects in the game */
  addInventory(item: string): void {
    this.inventory.add(item);
  }

  /**  The character progresses to the next level */
  progressToNextLevel(): void {
    this.level += 1;
  }

  /**  The character moves around the environment */
  moveForward(amount: number): void {
    this.location["z"] += amount;
  }

  status(): string {
    return (
      `Score: ${this.score}, ` +
      `Level: ${this.level}, ` +
      `Location: ${JSON.stringify(this.location)}\n` +
      `Inventory: ${JSON.stringify(Array.from(this.inventory))}`
    );
  }

  /** A getter for the characters attributes as a Memento */
  public getMemento(): Memento {
    return new Memento(
      this.score,
      new Set(this.inventory),
      this.level,
      Object.assign({}, this.location)
    );
  }

  public setMemento(value: Memento) {
    this.score = value.score;
    this.inventory = value.inventory;
    this.level = value.level;
    this.location = value.location;
  }
}
