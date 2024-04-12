// The Strategy Pattern example use case

class GameCharacter {
  // This is the context whose strategy will change

  protected position: [number, number] = [0, 0];

  move(movementStyle: IMoveConstructor) {
    // Movement algorithm decided by the client
    new movementStyle().move(this.position);
  }
}

interface IMoveConstructor {
  new (): IMove;
}

interface IMove {
  move(position: [number, number]): void;
}

class Walking implements IMove {
  // A concrete movement strategy for walking

  move(position: [number, number]): void {
    position[0] += 1;
    console.log(`I am walking. New position = ${position}`);
  }
}

class Sprinting implements IMove {
  // A concrete movement strategy for walking

  move(position: [number, number]): void {
    position[0] += 2;
    console.log(`I am Running. New position = ${position}`);
  }
}

class Crawling implements IMove {
  // A concrete movement strategy for crawling

  move(position: [number, number]): void {
    position[0] += 0.5;
    console.log(`I am Crawling. New position = ${position}`);
  }
}

// Client side
const GAME_CHARACTER = new GameCharacter();

GAME_CHARACTER.move(Walking);
// Character sees the enemy
GAME_CHARACTER.move(Sprinting);
// Character finds a small cave to hide in
GAME_CHARACTER.move(Crawling);
