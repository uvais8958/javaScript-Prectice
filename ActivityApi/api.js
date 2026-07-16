//our first API requets


let url1="https://catfact.ninja/fact";
fetch(url1)
.then((res)=>{
    console.log(res)
return  res.json()
    })
    .then((data)=>{
        console.log(data.fact);
        return fetch(url1);
    })
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data.fact);
    })
.catch((e)=>{
   console.log("error",e);
})

console.log("I am Happy..")



//Using fetching with async-await

let url="https://catfact.ninja/fact";

async function getFect(){
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.fact);
}



//with try catch

let url2="https://catfact.ninja/fact";
async function fact() {
    try{
        let res2=await fetch(url2);
        let data=await res2.json();
        console.log(data.fact);
    }catch(e){
        console.log("error",e);
    }
}



//different different calls


let url3="https://catfact.ninja/fact";
async function fact2(){
    try{
        let res= await fetch(url3)
        let data=await res.json();
        console.log(data.fact);

        let res2= await fetch(url3)
        let data2=await res2.json();
        console.log(data2.fact);

        let res3= await fetch(url3)
        let data3=await res3.json()
        console.log(data3.fact); 

    }catch(e){
        console.log("error",e);
    }
}