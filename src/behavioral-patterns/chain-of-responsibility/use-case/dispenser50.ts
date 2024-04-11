import IDispenser from "./idispenser";

// A dispenser of R50 notes
/** Dispenses R50's if applicable, otherwise continues to next successor */
export default class Dispenser50 implements IDispenser {
  protected successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    this.successor = successor;
  }

  handle(amount: number): void {
    if (amount >= 50) {
      const num = Math.floor(amount / 50);
      const remainder = amount % 50;
      console.log(`Dispensing ${num} R50 note/s`);
      if (remainder !== 0) {
        this.successor?.handle(remainder);
      }
    } else this.successor?.handle(amount);
  }
}
