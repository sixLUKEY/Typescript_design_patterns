# Source Code

In this example, I interpret the string `5 + 4 - 3 + 7 - 2` and then calculate the result.

The grammar of the string follows a pattern of Number ⇾ Operator ⇾ Number ⇾ etc.

I convert the string into a list of tokens that I can refer to by index in the array.

I then construct the AST manually, by adding a

1. Non-Terminal `Add` row containing two Terminals for the `5` and `4`,
2. Non-Terminal `Subtract` row containing the previous Non-Terminal row and the `3`
3. Non-Terminal `Add` row containing the previous Non-Terminal row and the `7`
4. Non-Terminal `Subtract` row containing the previous Non-Terminal row and the `2`

The AST root becomes the final row that was added, and then I can run the `interpret()` method on that, which will interpret the full AST recursively because each AST row references the row above it.
