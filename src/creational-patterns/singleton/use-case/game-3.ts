// A game class that uses the Leaderboard Singleton

import Leaderboard from "./leaderboard";
import IGame from "./igame";

export class Game3 implements IGame {
  leaderboard: Leaderboard;

  constructor() {
    this.leaderboard = new Leaderboard();
  }

  addWinner(position: number, name: string): void {
    this.leaderboard.addWinner(position, name);
  }
}
