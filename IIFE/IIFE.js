

// //print a message

(function(){
    console.log("Hello World")
})();



// //add two number

(function(){
    let a=10;
    let b=20;
    console.log(a+b);
})();

// parameters
(function(name){
    console.log("Hello dear"+" "+name);
})("Uvais");



// // print sqaure
(function(num){
    console.log("square answer="+num*num);
})(6);


// // create a private varriable
(function(){
  let count=0;
  count++;
  count++;
  count++;
console.log(count);
})();




//arrow function

((a,b)=>{
  console.log(a*b);
})(5,4);



// Array sum using IIFE
(function(){
    let array=[10,20,30,40];
    let sum=array.reduce((acc,curr)=>(acc+curr));
    console.log(sum);
})();


// count even number

(function(){
    let arr=[1,2,3,4,5,6];
    let even=arr.filter(num=>num%2 == 0);
    console.log(even);
})();



// Module patter using IIFE
const counter=(function(){
    let count=0;
    return{
        increment(){
            count++;
        console.log("Increament count="+count);
        },decrement(){
            count--;
            console.log("Decrement Count="+count);
        }
    };
})();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();


// Quize questions 
var a=10;
(function(){
    var a=20;
    console.log(a);//20
})();
console.log(a);//10


;(function()
{
    console.log("Hellow js...");
})();