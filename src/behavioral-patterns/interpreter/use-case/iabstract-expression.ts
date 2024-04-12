/** All terminal and non-terminal expressions will implement an 'interpret' method */
export default interface IAbstractExpression {
  value?: number;
  left?: IAbstractExpression
  right? : IAbstractExpression
  interpret(): number
}
