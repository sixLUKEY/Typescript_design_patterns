// The Proteus interface
/** A Greek mythological character that can change to many forms */
export default interface IProteus {
  /** @method tellMeTheFuture() Proteus will change to something random */
  tellMeTheFuture(): void;
  /** @method tellMeYourForm() Logs the form Proteus is currently in */
  tellMeYourForm(): void;
}
