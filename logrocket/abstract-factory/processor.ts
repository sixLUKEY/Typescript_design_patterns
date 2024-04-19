import { IProcessor, IStorage } from "./interfaces";

export default class MacbookProcessor implements IProcessor {
  storage: string | undefined;

  MacbookProcessor() {
    console.log(`Macbook is built using apple silicone chips`);
  }

  attachStorage(storageAttached: IStorage): string {
    this.storage = storageAttached.getStorageType();
    console.log(`storageAttached`, storageAttached.getStorageType());
    return `${this.storage} attached to MacBook`;
  }

  showSpecs(): string {
    return this.toString();
  }

  toString(): string {
    return `AppleProcessor is created using Apple Silicon and ${this.storage}`;
  }
}
