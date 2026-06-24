// let name=`uvais`;
// let age=25;
// console.log(`My name is ${name} 
//     and age is ${age}`);

// const { use } = require("react");


    //multiline without template literal

    // console.log("hellow/nuvais ")

    //expression in template
    // let a=10;
    // let b=20;
    // console.log(`sum is here ${a+b}`);



    //function call inside template literals
    // function greet(name){
    //     let age=25;
    //     return `hello ${name}`;
    // }
    // console.log(`${greet ("uvais")} `);

    //real interview question

    // const product="Laptop";
    // const price=50000;
    // const massege=`Product Name: ${product}
    // Price:${price}
    // Discount Price: ${price-500}`;
    // console.log(massege);


    

    // let  id=101;
    // let CollageName="BIMT";
    // const fees=15000;
    // let canteineFees=2000;
    // let detail=`My name is ${id} and 
    // collage name ${CollageName} and fees is ${fees}
    //  and conteine fees is ${canteineFees}
    //  after discount is ${canteineFees-200}
    //  `;
    //  console.log(detail);


//normal function

// function greet(){
//     console.log("uvais");
// }
// greet();

//Arrow function
    // const greet=()=>{
    //     console.log("hello uvais");
    // };
    // greet();



    //1 no perameters

    // const hello=()=>{
    //     console.log("hellow");
    // }
    // hello();

    // //single perameters
    // const square=num=>{
    //     return num*num;
    // }
    // console.log(square(5));



    //normail function this

    // const person={
    //     name:"uvais",
    //     normalFunction:function(){
    //         console.log(this.name);
    //     }
    // };
    // person.normalFunction();


    //arrow function 

    // const person={
    //     name:"Uvais",
    //     arraowFunction:()=>{
    //         console.log(this.name);
    //     }
    // };
    // person.arraowFunction();//undefined


// let num=23;
// let newNum=num++;             //num=24 newNum=23
// console.log("num"+num+" "+"newNum"+ newNum);


// let age=12;
// let newAge=++age;
// console.log("age"+age+"newAge"+newAge);//newAge13 age=13



// let age=24;
// let isadult="true";
// console.log(age,isadult+" "+typeof isadult);


//change the value of varrible 
// let a=20;
// a=true
// console.log(typeof a);

//string
// let sentance="this is my 'pen'";
// console.log(sentance.length);
// console.log(sentance.slice(1,2));
// console.log( typeof sentance[sentance.length-2]);



// let firstName="uvais";
// let lastName="Ansari";
// let comp=firstName+lastName;
// console.log( typeof comp+1);


//prectice question

// let name="uvais";
// console.log(name.length);
// let firstName="uvais";
// console.log(firstName[0]);
// console.log(firstName[4]);



//Logical operator

//Logical And operator

// let marks=90;
// if(marks>=33 && marks<=80){
//     console.log("Pass");
//     console.log("A++");
// }else{
//     console.log("you are failed...");
// }


//Logical OR operator

// let mark=10;
// if(mark>=33 || mark<=80){
//     console.log("Pass.."+" "+" A++");
// }else{
//     console.log("Failed");
// }



//Logical Not !

// let mark=75;
// if(!(mark>=33)){
//     console.log("pass");
// }else{
//     console.log("failed")
// }


//multiple Operator

// let mark=23;
// if((mark>=33 && mark<=80) || !true){

//     console.log("pass..");

// }else{
//     console.log("failed...");
// }

//prectice question 

// let str="snake";
// if(( str[0]=="a") && (str.length>=3)){
//     console.log("Good string");
// }else{
//     console.log("bad String..");
// }




//prectice 2 

// let num=12;
// if((num%3===0)&&(num+1==15)||(num-1==11)){
//     console.log("safe")
// }else{
//     console.log("unsafe...");
// }
// //safe



//boolean expretion

// if(BigInt){
//     console.log("it has true value")
// }else{
//     console.log("it has false value..")
// }

// let str=" ";
// if(str){
//     console.log("string is not empty");
// }
// else{
//     console.log("string is empty..")
// }
// let num=2;
// if(num){
//     console.log("number is not equalt to 0...");
// }else{
//     console.log("num is not valid..");
// }


//switch statement


// let day=3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday, funday");
//         break;
//         default:
//             console.log("wrong day...");

// }


//Alert & Promt
// alert("Please enter your name..!");
// console.error("this is an error");
// console.info("this is main info..")
// let name=prompt("enter your rollNo.")
// console.log(name)

// let firstName=prompt("Enter your first name.");
// let lastName=prompt("Enter your last name");
// let msg="Welcome"+" "+ firstName + " " + lastName;
// alert(msg)
// console.log(msg)


//prectic question
//1
// let num=2;
// if(num%10==0){
//     console.log("good")
// }else{
//     console.log("Bad!");
// }

//2
// const name=prompt("Please enter your name");
// let age=prompt("Enter your age");
// let msg=alert(`name  ${name} and  ${age}age years old`);
// console.log(msg);


//3

// let months=1 
// switch(months){
//     case 1:
//         console.log("January"+" "+"Febuary"+" "+"March");
//         break;
//         case 2:
//             console.log('April'+" "+'May'+' '+'June');
//             break;
//             case 3:
//                 console.log('july'+' '+'August'+' '+ 'September');
//                 break;
//                 case 3:
//                     console.log('October'+' '+ 'November'+' '+'December');
//                     default:
//                         console.log("This is not valid choice ....!");
// }




// Array 

// let students=["Uvais","Juniad","Vatsal","Zuber"];
// console.log(students);

// let num=[2,4,6,8,10];
// console.log(num);


//creating array


// let students=["uvais","Junaid","Vatsal","Zuber","Anmol"];
// let marks=[99,87,75,65,89];
// console.log(students.length,marks.length);
// let info=["Uvais",22,"Bca",85.6];
// console.log(info);



// let studentInf={
//     name:"Uvais",
//     age:22,
//     course:"BCA",
//     fees:20000,
//     semister:"2nd",
// year:3
// }

// console.log(studentInf.fees);



// let color=["green","yellow","blue"];

// color.push("red");

// console.log(color)//add last index red
// color.pop()
// console.log(color)//delete last index red


// color.unshift("orange");//orane yellow blue
// console.log(color);

// color.shift();//green yellow blue
// console.log(color);

// console.log(color.reverse());// 'blue', 'yellow', 'green' ]


// console.log(color.indexOf("green"));//0       


// console.log(color.includes("yellow"))//true
// console.log(color.includes("orange"));//false


// const Post={
//    userName:"@uvaisAnsari",
//    content:"This is my #firstPost",
//    likes:56,
//    reposts:7,
//    tags:["@uvaisHub","Uvais"]
// };

// console.log(Post.content);
// console.log(Post.likes);
// console.log(typeof Post["reposts"]);


// const obj={
//     1:"a",
//     2:"b",
//     undefined:"d",
//     null:"c",
//     true:"e"
// }

// console.log(obj);


// const Student={
//     name:"Uvais",
//     city:"Budaun",
//     marks:65.5,

// }

// nasted object

// const Class={
//     uvais:{
//         marks:"A",
//         city:"Budaun",
//         course:"BCA"
//     },
//     zuber:{
//         marks:"A+",
//         city:"Ujhani",
//         course:"BBA"
//     },
//     junaid:{
//         marks:"A++",
//         city:"Banglour",
//         Course:"B.Com"
//     }
// }
// console.log(Class);


//nested Array

// const classIfo=[

// {
//     name:"Uvais",
//     marks:65.0,
//     city:"Budaun"
// },
// {
//     name:"Vatsal",
//     marks:75.0,
//     city:"Ujhani"
// },
// {
//     name:"Zuber",
//     marks:85.9,
//     city:"Delhi"
// }

// ];

// let num=Math.random();
// let step2=num*10;
// let setp3=Math.floor(Math.random()*10)+1;
// console.log(setp3);

//1 to 100 random number
// let num=Math.floor(Math.random()*100)+1;
// console.log(num);


//1 to 5
// let num=Math.floor(Math.random()*5)+21;
// console.log(num);


// function in js

// function rollDiece(){
//     let roll=Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }
// rollDiece();


// function with arguments

// function studentInf(name,age,adress){
//     console.log(`My Name is ${name} and age is ${age} my address is ${adress}`);
// }
// studentInf("Uvais",23,"Mohalla Sotha Budaun");//My name is Uvais and age is 23 my adress is Mohalla sotha Budaun



//prectice question 1 print avrage of two numbers

// function calAvr(a,b){
//     let avr=(a+b)/3;
//     console.log(avr);
// }
// calAvr(2,4);//2+4/3=2;


// function printTable(n){
//     for(let i=3;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// printTable(3);


// function sum(a,b){
//     return a+b;

// }
// console.log(sum(sum(1,2),3));//6


// let greet="Hello";//global

// function changeGreet(){
//     let greet="AsslamUallekum";//function
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);//lexical
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();


// Array Method

//1:forEch Method

// let nums=[1,2,3,4,5,6,7];
// function print(el){
//     console.log(el);
// }
// nums.forEach(print);


// let fruites=["Apple","Banana","Mango"];
// fruites.forEach(function(friut){
//     console.log(friut);
// });

// for index
// let fruits=["Apple","Banana","Mango"];
// fruits.forEach(function(friut,index){
//     console.log(friut,index);
// }); 


// in arrow function
// let nums=[1,2,3,4,5,6,7];
// nums.forEach((num)=>{
//     console.log(num);
// })

//prectice program
// const numbers=[1,2,3,4,5];
// numbers.forEach((num)=>{
//     console.log(num*num);
// })



//Map method

// let num=[1,2,3,4];
// let double=num.map(function(el){
//     return el**2;
// })
// console.log(double);


// let names=["uvais","ali","zuber"];
// let nameUppercase= names.map(function(name){
//     return name.toUpperCase();
// })
// console.log(nameUppercase);
// nameUppercase[0]="Junaid";
// console.log(nameUppercase);
// console.log(names)
// nameUppercase[0].gender="Male";
// console.log(nameUppercase);


//short arrow function
// const nume=[1,2,3,5,7,8];
// const square=nume.map(num=>num*num);
// console.log(square);


// let array2=[1,2,3,4];
// let result2=array2.forEach(num=>num*2);
// console.log(result2);//undefind



// const array=[1,2,3];
// const result1=array.map(num=>num*2);
// console.log(result1)   //2,4,6



//Reduce Method

// let nums=[2,3,4,5,6,7,8,9,20];
// let result=nums.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(result);


// // Arrow function


// let arr=[1,2,3];
// const sum=arr.reduce((acc,curr)=>{
//     return acc+curr;
// })
// console.log(sum);

// //find the maximume value;

// const arr2=[10,25,5,40,18];
// const max=arr2.reduce((acc,curr)=>{
//     return curr>acc?curr:acc;
// });
// console.log(max);


//setTimeout


//arrow function in setTimeout

// console.log("Asslamoallekum..");
// setTimeout(()=>{
//     console.log("I am muslim...");
// },3000);

// console.log("alhamdollilah.....");


//normal function

// console.log("milne hai mujhse aii...");
// const id=setTimeout(function(){
//     console.log("fir jaane kyu tanhai..");
// },3000);
// console.log("lyrics bool gaya");

// clearInterval(id);//stop set interval;



//setInterval

// console.log("setInterval is started...");
// const id=setInterval(function(){
//     console.log("ashiqui washiqi a hai tashiqui jabse..");
//     console.log("milne aayi hai tashiqui ...")
//     console.log("song bhool gaya...");
// },3000);
// clearInterval(id);

// console.log("ginte started...");
// let cout=1;
// const id=setInterval(()=>{
//  console.log(cout);
//     cout++;
// },2000);
// clearInterval(id);


// let count=1;
// const id2=setInterval(()=>{
//     console.log(count);
//     if(count===5){
//         clearInterval(id2);
//     }
//     count++;
// },2000)





//Rest 
// function sum(...args){
//     return args.reduce((add,el)=>add+el);
// }
// console.log(sum(1,2,3,4,5,6));//21



// //Rest array in Destructurin

// const [first,second,...rest]=[10,20,30,40,50,60];
// console.log(first);//10
// console.log(second);//20
// console.log(...rest);//30 40 50 60


//Rest Object  Destructuring


// let student={
//     name:"Uvais",
//     age:21,
//     Subject:['hindi','english','Math','urdu','social-science'],
//     password:1234,
//     city:"pune"
// }
// let {name:user,password:pass,city:place="Mumbai"}=student;//


// cal back function


// function greet(name,callback){
//     console.log("Hello"+name);
//     callback();
// }
// greet("Uvais",function(){
//     console.log("Nice to meet you..");
// })


