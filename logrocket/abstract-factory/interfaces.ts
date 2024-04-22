export interface IStorage {
  getStorageType(): string;
}

export interface IProcessor {
  attachStorage(storage: IStorage): string;
  showSpecs(): string
}

export interface LaptopFactory {
    createProcessor(): IProcessor
    createStorage(): IStorage
}