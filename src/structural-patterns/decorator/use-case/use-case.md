# Decorator Use Case

Let's create a custom class called `Value` that will hold a number.

Then add decorators that allow addition (`Add`) and subtraction (`Sub`) to a number (`Value`).

The `Add` and `Sub` decorators can accept numbers directly, a custom `Value` object or other `Add` and `Sub` decorators.

`Add`, `Sub` and `Value` all implement the `IValue` interface and can be used recursively.

Note that in this example use case, I have created the `Add`, `Sub` and `Value` as functions that return new instances of classes `_Add`, `_Sub` and `_Value`. This was not necessary, but it means that I can use the `Add`, `Sub` and `Value` in a recursive manner without needing to prefix the `new` keyword in front of each usage all the time.

E.g,

```js
console.log(Add(Sub(Add(C, B), A), 100).value);
```

Alternatively, I could have named my classes as Add, Sub and Value and then used them recursively directly as

```js
console.log(new Add(new Sub(new Add(C, B), A), 100).value);
```
