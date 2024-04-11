import IDispenser from "./idispenser";

// A dispenser of R10 notes
/** Dispenses R10's if applicable, otherwise continues to next successor */
export default class Dispenser10 implements IDispenser {
  protected successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    this.successor = successor;
  }

  handle(amount: number): void {
    if (amount >= 10) {
      const num = Math.floor(amount / 10);
      const remainder = amount % 10;
      console.log(`Dispensing ${num} R10 note/s`);
      if (remainder !== 0) {
        this.successor?.handle(remainder);
      }
    } else {
      this.successor?.handle(amount);
    }
  }
}
