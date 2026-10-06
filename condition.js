let num=10;
if(num%2==0){
    console.log("even");
}else{
    console.log("odd");
}


let age=23;
if(age>=20){
console.log("adult");
}else{
    console.log("Minur");
}


let number=-5;
if(number=="+"){
  console.log("positive");
}else{
    console.log("negative");
}

let a=20;
let b=15;
if(a>=b){
    console.log("a is larget value",a);
}else{
    console.log("b is smallest value",b);
}






let i=1;
while(i<=5){
    console.log(i);
    i++;
}

/*

1
2
3
4
5

*/ 


for(let i=1;i<=5;i++){
    if(i===3){
        break;
    }
    console.log(i);
}

/*

1
2

*/ 


for(let i=1;i<=5;i++){
    if(i===3){
        continue;
    }
    console.log(i);
}


/*

1
2
4
5

*/ 