import IDispenser from "./idispenser";

// A dispenser of R20 notes
/** Dispenses R20's if applicable, otherwise continues to next successor */
export default class Dispenser20 implements IDispenser {
  protected successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    this.successor = successor;
  }
  handle(amount: number): void {
    if (amount >= 20) {
      const num = Math.floor(amount / 20);
      const remainder = amount % 20;
      console.log(`Dispensing ${num} R20 note/s`);
      if (remainder !== 0) {
        this.successor?.handle(remainder);
      }
    } else {
      this.successor?.handle(amount);
    }
  }
}
