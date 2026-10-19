/*String are use to store textual form of data like word,sentance,
   it follows zero based indexing

   write the string of three methods 
   1 is double quotes "", 2 is single quotes  '' ,and backtics ``

*/

let name="Uvais";
console.log(name);//5

//string methods

//1 length()
let str="javascript";
console.log(str.length);//10

//2 trim()

let str2="    uvais    ";
console.log(str2.trim());//uvais

let hello="hellow  world";
console.log(hello.trim());//hellow  world is not remove middle white spaces

//3 toLowerCase()

let str3="UVAIS";
console.log(str3.toLowerCase());//uvais

//4 toUpperCase()
let str4="UVAIS";
console.log(str3.toUpperCase());//UVAIS


//includes()

let message="I am learning javascript";
console.log(message.includes("javascript"));//true
console.log(message.includes("learning"));//true
console.log(message.includes("uvais"));//false

//indexof()

let name2="javascript";
console.log(name.indexOf("s"));//4
console.log(name.indexOf("a"));//2


//slice()

let text="mongodb";
console.log(text.slice(0,5));//mongo
console.log(text.slice(5));//db


//replace()
let message2="Hi Uvais";
console.log(message2.replace("Vatsal","Uvais"));//Hi Uvais
let result=message2.replace("Uvais","Vatsal");
console.log(result);//Hi Vatsal

