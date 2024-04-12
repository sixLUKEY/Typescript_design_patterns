// A Custom Parser for creating an Abstract Syntax Tree
import IAbstractExpression from "./iabstract-expression";
import Add from "./add";
import Numeral from "./numeral";
import RomanNumeral from "./roman-numeral";
import Subtract from "./subtract";

/** Dynamically creates the AST */
export default class Parser {
  /** @method parse()  creates the AST from the sentence */
  static parse(sentence: string): IAbstractExpression | undefined {
    const tokens = sentence.split(" ");

    const tree: IAbstractExpression[] = []; // Abstract Syntax Tree
    while (tokens.length > 1) {
      const leftExpression = Parser.decideLeftExpression(tree, tokens);

      // get the operator, make the token list shorter
      const operator = tokens.shift();

      const right = tokens[0];

      if (!Number(right)) {
        tree.push(new RomanNumeral(right));
        if (operator === "-") {
          tree.push(new Subtract(leftExpression, tree[tree.length - 1]));
        }
        if (operator === "+") {
          tree.push(new Add(leftExpression, tree[tree.length - 1]));
        }
      } else {
        const rightExpression = new Numeral(right);
        if (!tree.length) {
          // Empty data structures return false by default
          if (operator === "-") {
            tree.push(new Subtract(leftExpression, rightExpression));
          }
          if (operator === "+") {
            tree.push(new Add(leftExpression, rightExpression));
          }
        } else {
          if (operator === "-") {
            tree.push(new Subtract(tree[tree.length - 1], rightExpression));
          }
          if (operator === "+") {
            tree.push(new Add(tree[tree.length - 1], rightExpression));
          }
        }
      }
    }
    return tree.pop();
  }

  /** @description On the first iteration, the left expression can be either a number or roman numeral. Every consecutive expression is a reference to an existing AST row */
  static decideLeftExpression(
    tree: IAbstractExpression[],
    tokens: string[]
  ): IAbstractExpression {
    const left = tokens.shift();
    let leftExpression: IAbstractExpression;
    if (!tree.length) {
      // Only applicable on the first iteration
      if (!Number(left)) {
        // if 1st token is a Roman numeral
        tree = [];
        tree.push(new RomanNumeral(left as string));
        leftExpression = tree[tree.length - 1] as IAbstractExpression;
      } else {
        leftExpression = new Numeral(left as string);
      }
      return leftExpression;
    } else {
      leftExpression = tree[tree.length - 1] as IAbstractExpression;
      return leftExpression;
    }
  }
}
