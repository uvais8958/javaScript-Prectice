let name="Uvais";
console.log(typeof name);  //string

let  age=23;
console.log(typeof age); //number

let isStudent=true;
console.log(typeof isStudent); //Boolean

let x;
console.log(x);// undefined
console.log(typeof x); // typeof undefined

let x2=null;
console.log(x2); //null
console.log(typeof x2); //object


let a="100";
let b=100;
console.log( typeof a);//string
console.log(typeof b);//number


const user={
    name:"Uvais",
    age:23
}
console.log(typeof user);//kyuki {} ke ander user ek object hai to return karega 

let numbers=[1,2,3,4,5,6];
console.log(typeof numbers); // javascript mein array technically object ka specialy type hai isiliye.

var c=10;
var c=20;
console.log(c);//20 kyuki var ek function scope varriable hai ise hum redeclare and reassign kar skte hai

let e=10;
 e=20;
console.log(e);//20


// const w=10;
// w=20;
// console.log(w);//typeError

//Type Coercion
let q="10";
let r=10;
console.log( typeof q+r)//
