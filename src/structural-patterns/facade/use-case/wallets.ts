// A Singleton Dictionary for user wallets

import Reports from "./reports";

export default class Wallets {
  static instance: Wallets;
  protected wallets: { [id: string]: number } = {};
  protected reports = new Reports();

  constructor() {
    if (Wallets.instance) {
      return Wallets.instance;
    }
    Wallets.instance = this;
  }

  createWallet(userId: string): boolean {
    // A method to initialise a users wallet
    if (!(userId in this.wallets)) {
      this.wallets[userId] = 0;
      this.reports.logEvent(`walletr for '${userId}' created and set to 0`);
      return true;
    } else return false;
  }

  getBalance(userId: string): number {
    // A method to check a users balance
    this.reports.logEvent(
      `Balance check for '${userId}' = ${this.wallets[userId]}`
    );
    return this.wallets[userId];
  }

  adjustBalance(userId: string, amount: number): number {
    // A method to adjust a user balance up or down
    this.wallets[userId] = this.wallets[userId] + amount
    this.reports.logEvent(
        `Balance adjustment for '${userId}'. New balance = ${
            this.wallets[userId]
        }`
    )
    return this.wallets[userId]
}
}
