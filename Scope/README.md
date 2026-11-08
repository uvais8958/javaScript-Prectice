# Scope Concepts

This folder contains small JavaScript examples that explain important scope-related ideas in ES6.

## 1. lexicalScope.js
- Demonstrates lexical scoping in JavaScript.
- A function can access variables from its outer scope.
- `inner()` can use both the global variable `name` and the outer variable `age`.
- Helps understand how variable lookup works in nested functions.

## 2. closer.js
- Demonstrates closures in JavaScript.
- An inner function remembers and uses variables from its outer function even after the outer function finishes executing.
- Shows practical use cases like:
  - counter functions
  - private data / data privacy
  - stateful function behavior
- Example includes a bank account-like object where `balance` stays private and is modified only through methods.

## Summary
- Lexical scope = where variables are available in nested functions.
- Closure = inner function retains access to outer scope variables.
- Both are core concepts for writing modular and stateful JavaScript code.
