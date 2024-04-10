// A singleton Dictionary of Users

import Reports from "./reports";
import Wallets from "./wallets";

export default class Users {
  static instance: Users;
  protected users: { [id: string]: { [id: string]: string } } = {};
  protected reports = new Reports();
  protected wallets = new Wallets();

  constructor() {
    if (Users.instance) {
      return Users.instance;
    }
    Users.instance = this;
  }

  registerUser(newUser: { [id: string]: string }): string {
    // register a user
    if (!(newUser["user_name"] in this.users)) {
      // generate a really complicated unique userId
      // Using the existing user_name as the id for simplicity
      const userId = newUser["user_name"];
      this.users[userId] = newUser;
      this.reports.logEvent(`New user '${userId}' created`);
      // create a wallet for the new user
      this.wallets.createWallet(userId);
      // give the user a sign up bonus
      this.reports.logEvent(`Give new user '${userId}' sign up bonus of 10`);
      this.wallets.adjustBalance(userId, 10);
      return userId;
    }
    return "";
  }

  editUser(userId: string, user: { [id: string]: string }): boolean {
    // NOT ACTUALLY IMPLEMENTED
    console.log(userId);
    console.log(user);
    return false;
  }

  changePwd(userId: string, password: string): boolean {
    // NOT ACTUALLY IMPLEMENTED
    console.log(userId);
    console.log(password);
    return false;
  }
}
