function greet(){
    console.log("hello");
}
greet();
greet();

//function declaration
function add(a,b){
    return a+b;
}
console.log("add:",add(3,7));

//function expression
const mul=function(a,b){
    return a*b;
}
console.log("multiplication:" , mul(2,4));


const division=(a,b)=>{
    return a/b;
}
console.log("division:",division(6,3));

//shorter
const divi=(a,b)=>a/b;
console.log(divi(4,2));

//parameters vs argument
function greet(name){
    console.log("hii",name);
}
greet("uvais");
greet("altamsh");


//return statement

function mult(a,b){
    return a*b;
}
let result=mult(2,8);
console.log(result);//16

//important dissrence 
function test1(){
    console.log(10);
}
function test2(){
    return 10;
}

let a=test1();
console.log(a);
let b=test2();
console.log(b);


/*10
undefined
10*/



function hellow(name){
    console.log("Good Morning",name);
    console.log("  ajj ka kya plan hai...",name);
}
hellow("Uvais");


function add(a,b){
    return a+b;
}
console.log(add(5,9));

//even odd
function evenOdd(n){
    if(n%2==0){
        return "even";
    }
    return "odd";
}
console.log(evenOdd(7));


//square
function square(n){
    return n*n;
}
console.log("square",square(5));

//multiplication with arrow fnction

const m=(a,b)=>{
   return a*b;
}
console.log("multiplications:",m(5,9));

function test(){
    return 5;
    console.log(10);
}
console.log(test());//5

function greet(name){
    return "Hello"+name;
}
console.log(greet("Uvais"));
