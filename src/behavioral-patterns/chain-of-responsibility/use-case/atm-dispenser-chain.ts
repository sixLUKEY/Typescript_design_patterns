// The ATM Dispenser Chain

import Dispenser10 from "./dispenser10";
import Dispenser20 from "./dispenser20";
import Dispenser50 from "./dispenser50";
/** @description sets a default successor chain that will process the 50's first, 20's second and 10's last. Successor chain will be recalculated dynamically at runtime. */
export default class ATMDispenserChain {
  chain1: Dispenser50;
  chain2: Dispenser20;
  chain3: Dispenser10;

  constructor() {
    // Initialising the successors chain
    this.chain1 = new Dispenser50();
    this.chain2 = new Dispenser20();
    this.chain3 = new Dispenser10();

    this.chain1.nextSuccessor(this.chain2);
    this.chain2.nextSuccessor(this.chain3);
  }
}
