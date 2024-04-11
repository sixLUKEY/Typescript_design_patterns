import IProteus from "./iproteus";
import Leopard from "./leopard";
import Serpent from "./serpent";

/** Proteus in the form of a LIon */
export default class Lion implements IProteus {
    name = 'Lion'

    tellMeTheFuture(): void {
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Serpent())
            this.tellMeTheFuture = Serpent.prototype.tellMeTheFuture
            this.tellMeYourForm = Serpent.prototype.tellMeYourForm
        } else {
            Object.assign(this, new Leopard())
            this.tellMeTheFuture = Leopard.prototype.tellMeTheFuture
            this.tellMeYourForm = Leopard.prototype.tellMeYourForm
        }
    }

    tellMeYourForm(): void {
        console.log(`I am the form of ${this.name}`) 
    }
}