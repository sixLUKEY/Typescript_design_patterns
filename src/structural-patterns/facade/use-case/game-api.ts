// The Game API facade

import Reports from "./reports";
import Wallets from "./wallets";
import Users from "./users";
import GameEngine, { GameState } from "./game-engine";

export default class GameAPI {
  protected wallets: Wallets;
  protected reports: Reports;
  protected users: Users;
  protected gameEngine: GameEngine;

  constructor() {
    this.wallets = new Wallets();
    this.reports = new Reports();
    this.users = new Users();
    this.gameEngine = new GameEngine();
  }

  getBalance(userId: string): number {
    // get a players wallet balance
    return this.wallets.getBalance(userId);
  }

  gameState(): GameState {
    // Get current game state
    return this.gameEngine.getGameState();
  }

  getHistory(): { [id: string]: [number, string] } {
    // Get the game history
    return this.reports.getHistory();
  }

  changePwd(userId: string, password: string): boolean {
    // Change a users password
    return this.users.changePwd(userId, password);
  }

  submitEntry(userId: string, entry: number): boolean {
    // Submit a bet
    return this.gameEngine.submitEntry(userId, entry);
  }

  registerUser(value: { [id: string]: string }): string {
    // register a new user and returns the new id
    return this.users.registerUser(value);
  }
}
