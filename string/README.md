# JavaScript String Guide

A string is a sequence of characters used to represent text in JavaScript. Strings can hold words, sentences, numbers as text, symbols, and special characters.

## 1. What is a String?

In JavaScript, strings are used to store textual data.

```js
let name = "Uvais";
let message = 'Hello JavaScript';
let greeting = `Welcome ${name}`;
```

### String types
- Double quotes: `"hello"`
- Single quotes: `'hello'`
- Backticks: `` `hello` ``

Backticks support template literals and string interpolation:

```js
let name = "Uvais";
console.log(`My name is ${name}`); // My name is Uvais
```

---

## 2. String Rules in JavaScript

### 2.1 Strings are indexed
Each character has an index starting from `0`.

```js
let text = "JavaScript";
console.log(text[0]); // J
console.log(text[4]); // S
```

### 2.2 Strings are immutable
Strings cannot be changed directly after creation.

```js
let name = "Uvais";
name[0] = "P";
console.log(name); // Uvais
```

This means string methods return a new string instead of modifying the original one.

```js
let str = "hello";
let newStr = str.toUpperCase();
console.log(str);    // hello
console.log(newStr); // HELLO
```

### 2.3 Strings are primitive values
JavaScript treats strings as primitive types, but JavaScript also wraps them in a String object when needed.

```js
let x = "JavaScript";
console.log(x.length); // 11
```

### 2.4 Escape characters
Special characters can be written using backslashes.

```js
let text = "He said \"Hello\"";
let path = "C:\\Users\\Uvais";
let newline = "Line 1\nLine 2";
```

Common escape sequences:
- `\n` = new line
- `\t` = tab
- `\\` = backslash
- `\"` = double quote
- `\'` = single quote

### 2.5 Concatenation
Strings can be joined with `+` or template literals.

```js
let firstName = "Uvais";
let lastName = "Vatsal";
console.log(firstName + " " + lastName); // Uvais Vatsal
console.log(`${firstName} ${lastName}`); // Uvais Vatsal
```

### 2.6 Empty string
```js
let empty = "";
console.log(empty.length); // 0
```

### 2.7 String comparison
Strings are compared lexicographically.

```js
console.log("apple" < "banana"); // true
console.log("A" < "a"); // true
```

---

## 3. Common String Methods

### 3.1 `length`
Returns the number of characters in a string.

```js
let str = "JavaScript";
console.log(str.length); // 10
```

### 3.2 `toUpperCase()`
Converts string to uppercase.

```js
let str = "uvais";
console.log(str.toUpperCase()); // UVAIS
```

### 3.3 `toLowerCase()`
Converts string to lowercase.

```js
let str = "UVAIS";
console.log(str.toLowerCase()); // uvais
```

### 3.4 `trim()`
Removes whitespace from both ends of a string.

```js
let str = "   uvais   ";
console.log(str.trim()); // uvais
```

### 3.5 `trimStart()`
Removes whitespace from the beginning only.

```js
let str = "   uvais";
console.log(str.trimStart()); // uvais
```

### 3.6 `trimEnd()`
Removes whitespace from the end only.

```js
let str = "uvais   ";
console.log(str.trimEnd()); // uvais
```

### 3.7 `charAt(index)`
Returns the character at a specific index.

```js
let str = "JavaScript";
console.log(str.charAt(0)); // J
console.log(str.charAt(4)); // S
```

### 3.8 `charCodeAt(index)`
Returns the Unicode value of a character at the given index.

```js
let str = "A";
console.log(str.charCodeAt(0)); // 65
```

### 3.9 `at(index)`
Returns the character at the given index. Supports negative indexing.

```js
let str = "JavaScript";
console.log(str.at(0)); // J
console.log(str.at(-1)); // t
```

### 3.10 `indexOf(value)`
Returns the first index of a substring.

```js
let str = "JavaScript";
console.log(str.indexOf("S")); // 4
console.log(str.indexOf("a")); // 1
console.log(str.indexOf("xyz")); // -1
```

### 3.11 `lastIndexOf(value)`
Returns the last index of a substring.

```js
let str = "banana";
console.log(str.lastIndexOf("a")); // 5
```

### 3.12 `includes(searchValue)`
Checks if a substring exists in a string.

```js
let message = "I am learning JavaScript";
console.log(message.includes("JavaScript")); // true
console.log(message.includes("Python")); // false
```

### 3.13 `startsWith(searchValue)`
Checks whether a string starts with a given value.

```js
let str = "JavaScript";
console.log(str.startsWith("Java")); // true
```

### 3.14 `endsWith(searchValue)`
Checks whether a string ends with a given value.

```js
let str = "JavaScript";
console.log(str.endsWith("Script")); // true
```

### 3.15 `slice(start, end)`
Extracts a section of a string without changing the original.

```js
let str = "MongoDB";
console.log(str.slice(0, 5)); // Mongo
console.log(str.slice(5)); // DB
```

### 3.16 `substring(start, end)`
Similar to `slice()`, but it does not accept negative indexes.

```js
let str = "JavaScript";
console.log(str.substring(0, 4)); // Java
```

### 3.17 `substr(start, length)`
Older method to extract a substring.

```js
let str = "JavaScript";
console.log(str.substr(4, 6)); // Script
```

### 3.18 `replace(searchValue, replaceValue)`
Replaces the first matching value.

```js
let str = "Hi Uvais";
console.log(str.replace("Uvais", "Vatsal")); // Hi Vatsal
```

### 3.19 `replaceAll(searchValue, replaceValue)`
Replaces all matching occurrences.

```js
let str = "apple apple apple";
console.log(str.replaceAll("apple", "orange")); // orange orange orange
```

### 3.20 `split(separator)`
Splits a string into an array.

```js
let str = "apple,banana,grape";
console.log(str.split(",")); // ["apple", "banana", "grape"]
```

### 3.21 `concat(value1, value2, ...)`
Joins strings together.

```js
let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // Hello World
```

### 3.22 `repeat(count)`
Repeats a string a given number of times.

```js
let str = "Hi ";
console.log(str.repeat(3)); // Hi Hi Hi 
```

### 3.23 `padStart(targetLength, padString)`
Adds characters to the beginning until the string reaches a target length.

```js
let str = "5";
console.log(str.padStart(3, "0")); // 005
```

### 3.24 `padEnd(targetLength, padString)`
Adds characters to the end until the string reaches a target length.

```js
let str = "5";
console.log(str.padEnd(3, "0")); // 500
```

### 3.25 `search(regex)`
Returns the index of the first match.

```js
let str = "I am learning JavaScript";
console.log(str.search(/JavaScript/)); // 16
```

### 3.26 `match(regex)`
Returns matching results as an array.

```js
let str = "I have 3 apples and 2 oranges";
console.log(str.match(/\d+/g)); // ["3", "2"]
```

### 3.27 `localeCompare(compareString)`
Compares two strings in the current locale.

```js
console.log("apple".localeCompare("banana")); // -1
```

### 3.28 `valueOf()`
Returns the primitive value of a String object.

```js
let str = new String("JavaScript");
console.log(str.valueOf()); // JavaScript
```

### 3.29 `toString()`
Converts an object to a string.

```js
let str = new String("JavaScript");
console.log(str.toString()); // JavaScript
```

---

## 4. String Methods Used in This File

The file `string.js` demonstrates basic string operations:

```js
let name = "Uvais";
console.log(name.length); // 5

let str = "javascript";
console.log(str.length); // 10

let str2 = "    uvais    ";
console.log(str2.trim()); // uvais

let str3 = "UVAIS";
console.log(str3.toLowerCase()); // uvais

let message = "I am learning javascript";
console.log(message.includes("javascript")); // true

let text = "mongodb";
console.log(text.slice(0, 5)); // mongo

let message2 = "Hi Uvais";
console.log(message2.replace("Uvais", "Vatsal")); // Hi Vatsal
```

---

## 5. Important String Notes

- Strings are zero-indexed.
- Strings are immutable.
- String methods do not modify the original string; they return a new one.
- `trim()` removes spaces from both ends only, not in the middle.
- `replace()` changes only the first matching value unless you use `replaceAll()`.
- Use template literals for cleaner interpolation.

---

## 6. Practical Examples

### Example 1: Validate a username
```js
let username = "  Uvais123  ";
let clean = username.trim();
console.log(clean); // Uvais123
```

### Example 2: Convert case
```js
let name = "uvais";
console.log(name.toUpperCase()); // UVAIS
```

### Example 3: Check a word inside a sentence
```js
let sentence = "I am learning JavaScript";
console.log(sentence.includes("learning")); // true
```

### Example 4: Replace text
```js
let text = "Welcome to JavaScript";
console.log(text.replace("JavaScript", "JS")); // Welcome to JS
```

### Example 5: Split into array
```js
let names = "Uvais,Vatsal,Ahmed";
console.log(names.split(",")); // ["Uvais", "Vatsal", "Ahmed"]
```

---

## 7. Summary

String handling is one of the most important parts of JavaScript. You must remember:

- Strings use quotes or backticks.
- Characters are indexed from `0`.
- Strings are immutable.
- Many methods return a new string instead of changing the original.
- Use `trim()`, `toUpperCase()`, `toLowerCase()`, `slice()`, `replace()`, `includes()`, and `split()` often.

This makes strings extremely useful for text processing, validation, user input, and web app data handling.

---

## 8. Quick Cheat Sheet

```js
let str = " JavaScript ";

str.length;             // number of chars
str.trim();             // remove spaces
str.toUpperCase();      // uppercase
str.toLowerCase();      // lowercase
str.includes("Java");  // true/false
str.indexOf("a");      // index number
str.slice(0, 4);        // extract substring
str.replace("Java", "JS");
str.split(" ");        // convert to array
```

This is a complete beginner-friendly guide to JavaScript strings and their methods.
