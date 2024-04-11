export default interface IDispenser {
  /** @method nextSuccessor() sets the next successor */
  nextSuccessor(successor: IDispenser): void;
  /** @method handle() handle the dispensing of notes */
  handle(amount: number): void;
}
