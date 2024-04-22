import { IProcessor, IStorage, LaptopFactory } from "./interfaces";
import MacbookProcessor from "./processor";
import MacbookStorage from "./storage";

export class MacBook implements LaptopFactory {
  storageSize: number;

  constructor(storage: number){
    this.storageSize = storage
  }

  createProcessor(): IProcessor {
      return new MacbookProcessor()
  }

  createStorage(): IStorage {
      return new MacbookStorage(this.storageSize)
  }
}

export const buildLaptop = (laptopFactory: LaptopFactory): IProcessor => {
    const processor = laptopFactory.createProcessor()

    const storage = laptopFactory.createStorage()

    processor.attachStorage(storage)

    return processor
}

