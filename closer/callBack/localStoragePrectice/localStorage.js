let key=prompt("Enter key you want to set ");
let value=prompt("Enter the value");
localStorage.setItem(key,value);
console.log(localStorage.getItem(`The value at ${key} is ${localStorage.getItem(key)}`))
