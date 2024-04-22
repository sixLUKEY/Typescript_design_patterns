import { IStorage } from "./interfaces";

export default class MacbookStorage implements IStorage {
    storageSize: number

    constructor(_storageSize: number){
        this.storageSize = _storageSize
        console.log(`${this.storageSize} GB SSD is used`)
    }

    getStorageType(): string {
        return `${this.storageSize}GB SSD`
    }
}