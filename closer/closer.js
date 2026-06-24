

//A closer is a function that remember can be access varriables from its outer scope 
//even after the outer function has finished executing


//prectice question 1

// function outer(){
//     let name="uvais";
//     function inner(){
//         console.log(name);
//     }
//     inner();
// }
// outer();




//real world use case

// function createBalanceAccount(initialBalance){
//     let balance=initialBalance;
//     return{
//         deposite(amount){
//             balance+=amount;
//         },
//         getBalance(){
//             return balance;
//         }
//     };
// }
// const account=createBalanceAccount(1000);
// account.deposite(500);
// console.log(account.getBalance());//1500
// console.log(account.balance);//udefined




//prectice question counter Program

// function counter(){
//     let count=0;
//      return function(){
//         count++;
//         console.log(count);

//      };
// }
// let increment=counter();
// increment();//1
// increment();//2
// increment();//3
// increment();//4
// increment();//5


// Privet Varriables
// function banckAccount(){
//    let balance=1000;
//    return{
//       deposite(amount){
//          balance += amount;
//       },getBalance(){
//          return balance;
//       }
//    };
// }


// const account=banckAccount();
// account.deposite(2500);
// console.log(account.getBalance());//3500



//function fectory
// function multiply(x){
//    return function(y){
//       return x*y;
//    };
// }
// const double=multiply(2);
// console.log(double(5));//10



//guess the output
// ;function outer(){
//    let a=10;
//    return function(){
//       console.log(a);
//    };
// }
// let fun=outer();
// fun();
console.log("After 2s second...")
function showMassege(){
   let message="Hello uvais what are you doing";
      setTimeout(function(){
         console.log(message);
      },2000);
   
}

showMassege();





