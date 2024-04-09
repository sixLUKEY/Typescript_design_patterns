// Prototype concept sample code
import Document from "./document"

export default interface IPrototype {
    // Interface with clone method
    clone(mode: number): Document
}