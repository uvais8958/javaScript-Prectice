

// callBack function


// function great(name,callback){
//     console.log("Hey!"+name);
//     callback();
// }
// function sayBay(){
//     console.log("Say Bay!");
// }
// great("Uvais",sayBay);//Hey! Uvais Say Bay!


// Add two number

// function add(a,b,callBack){
//     console.log(a+b);
//     callBack(add)
// }
// function display(result){
//     console.log(result);
// }
// add(10,20,display);



//Even or odd number

// function checkNumber(num,callback){
//     callback(num);
// }function result(num){
//         if(num%2==0){
//             console.log("This Even number...");
//         }else{
//             console.log("this odd number!");
//         }
// }
// checkNumber(6,result);//even number why 6/2=3=0


//square of number
// function calCulate(num,callback){
//     callback(num);
// }calCulate(function(n){
//     console.log(n*n);
// });
// calCulate(2);


// Array Element using callBack

// function printArray(arr,callback){
//     arr.forEach(callback);
// }printArray([10,20,30],function(item){
//     console.log(item);   //10 20 30
// });


//calculator using callBack function

// function calCulator(a,b,operators){
//     operators(a,b);
// }function addition(x,y){
//     console.log(x+y);
// }function subtraction(x,y){
//     console.log(x-y);
// }function  multiplication(x,y){
//     console.log(x*y);
// }function devision(x,y){
//     console.log(x/y);
// }
// calCulator(2,1,addition);//3
// calCulator(3,1,subtraction)//2
// calCulator(2,6,multiplication);//12
// calCulator(8,2,devision);//4


//semulate login
function login(userName,callback){
    console.log(userName,"Loged In...");
   callback(); 
}login("uvais",function(){
    console.log("Welcome to dashBoard..");// Uvais Loged in... Welcome to Dashboard

})

