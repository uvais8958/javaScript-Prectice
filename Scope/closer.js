// function outer(){
//     let name="Uvais";
//     function inner(){
//         console.log(name);
//     }
//     inner()
// }
// outer();//Uvais

// function outer(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// let result=outer();
// result();
// result();
// result();


/*
out put            real life uses=> Data privacy, counter functions, function factories maintaining state

1
2
3

*/               

//data privacy using closure

function banlAccount(){
    let balance=10000;
    return{
        deposite:function(amount){
            balance+=amount;
            console.log(balance);
        },
        checkBalance:function(){
            console.log(balance);
        }
    };
}

let account =banlAccount();

account.checkBalance();
account.deposite(200);
account.checkBalance();

/*

10000
10200
10200
*/ 