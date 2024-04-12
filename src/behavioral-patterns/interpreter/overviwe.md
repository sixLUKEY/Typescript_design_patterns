# Overview

The Interpreter pattern helps to convert information from one language into another.

The language can be anything such as words in a sentence, numerical formulas or even software code.

The process is to convert the source information, into an Abstract Syntax Tree (AST) of Terminal and Non-Terminal expressions that all implement an interpret() method.

A Non-Terminal expression is a combination of other Non-Terminal and/or Terminal expressions.

Terminal means terminated, i.e., there is no further processing involved.

An AST root starts with a Non-Terminal expression and then resolves down each branch until all expressions terminate.

An example expression is A + B.

The A and B are Terminal expressions and the + is Non-Terminal because it depends on the two other Terminal expressions.

## Terminology

Abstract Expression: Describe the method(s) that Terminal and Non-Terminal expressions should implement.
Non-Terminal Expression: A composite of Terminal and/or Non-Terminal expressions.
Terminal Expression: A leaf node Expression.
Context: Context is state that can be passed through interpret operations if necessary.
Client: Builds or is given an Abstract Syntax Tree to interpret.
