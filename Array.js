// let fruite=["Apple","Banana","Orange","Mango"];
// console.log(fruite[0]);//Applw
// console.log(fruite[1]);//Banana
// console.log(fruite[2]);//Orange
// console.log(fruite[3]);//Mango

// fruite[1]="Papaya";
// console.log(fruite);  //[ 'Apple', 'Papaya', 'Orange', 'Mango' ]



// let num=[1,2,3,4,5,6];
// console.log(num.length);//6
// console.log(num[0]);//1
// console.log(num.push(9));//7
// console.log(num.pop());//6

// console.log(num.shift());//1
// console.log(num.unshift(0));
// console.log(num);// [ 0, 2, 3, 4, 5, 6 ]


//Slice VS splice
// let arr=[10,20,30,];
// console.log(arr.slice(1,3));
// console.log(arr);

//[ 20, 30 ]
//[ 10, 20, 30 ]

//splice
// console.log(arr.splice(1,2));
// console.log(arr);


//[ 20, 30 ]
//[ 10, 20, 30 ]
//[ 20, 30 ]
//[ 10 ]

// let numbers=[10,20,30,40,50];
// for(i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }


/*
out put

10
20
30
40
50

*/ 


//largest number find 

//Array Mathods

//map
// let num=[1,2,3,4];
// let double=num.map(function(el){
//     return el *2;
// });
// console.log(double);// [ 2, 4, 6, 8 ]

//Filter

// let arr=[2,4,1,5,6,7,8,9];
// let even=arr.filter((num)=>(num%2==0));
// console.log(even);//      [ 2, 4, 6, 8 ]

// //Everry()

// let res=[1,2,3,4,5].every((el)=>(el%2==0));
// console.log(res);//false


// let res2=[2,4,6].every((el)=>(el%2==0));
// console.log(res2);//true

// let a=[1,2,4];
// let r=a.some((el)=>(el%2==0));
// console.log(r);


// let number=[2,4,6,8];
// let result=number.map(function(el){
//     return el*2;
// })
// console.log(result);//[ 4, 8, 12, 16 ]

// let num=[11,20,31,40,51,60];
// let even=num.filter((even)=>(even%2==0));
// console.log(even);//[ 20, 40, 60 ]

// let n=[5,10,15,20];
// let sum=n.reduce(function(sum,number){
//     return sum+number
// })
// console.log(sum);//50

// let a=[1,2,3,4,5,6];
// let c=a.map(num=>num+5);
// console.log(c);//[ 6, 7, 8, 9, 10, 11 ]

// let employee={
//     name:"Uvais",
//     subject:"Java",
//     year:"2025",
//     course:"BCA"
// }
// console.log("Employee Name",employee.name,"Employee Course",employee.course)  //Employee Name Uvais Employee Course BCA


// let student={
//     name:"Aman",
//     age:25,
// }
// student.age=21;
// console.log(student);




//Array method
 //1 find()
// let numbers=[10,20,30,40,50];
// let result=numbers.find(num=>num>25);
// console.log(result);//30

//2 some()
// let numbers=[10,15,20,25];
// let result=numbers.some(num=>num>20);
// console.log(result);//true

 //every()
// let numbers=[10,20,30,40];
// let result=numbers.every(num=>num>5);
// console.log(result);//true

// let numbers2=[10,20,1,40];
// let result2=numbers2.every(num=>num>5);
// console.log(result2);//false

//3 Sort()
// let numbers=[20,10,40,30,50];
// let result=numbers.sort((a,b)=>a-b);
// console.log(result);//  [ 10, 20, 30, 40, 50 ]

// let num=[10,40,50,20,30];
// let resu=num.sort((a,b)=>b-a);
// console.log(resu);//   [ 50, 40, 30, 20, 10 ]


//for of loop

// let fruits=["Apple","Banana","Mongo"];
// for(fruit of fruits ){
//     console.log(fruit);
// }

// Apple
//Banana
//Mongo


let numbers=[10,20,30,40];
let result=numbers.find(num=>num>25);
console.log(result);//30


let n=[2,4,6,7,8];
let r=n.some(num=>num%2!==0);
console.log(r);//true

let a=[10,20,30];
let r2=a.every(num=>num>5);
console.log(r2);//true

let q=[50,10,40,20,30];
let res=q.sort((a,b)=>a-b);
console.log(res);//[ 10, 20, 30, 40, 50 ]

let nu=[12,25,8,30,16,40];
let i=nu.filter(num=>num>18);
console.log(i);//[ 25, 30, 40 ]



