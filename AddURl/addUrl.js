//Using Query Parameters 

const url=new URL("https://exmaple.com");
url.searchParams.append("name","Uvais");
url.searchParams.append("age","23");
console.log(url.toString());//https://exmaple.com/?name=Uvais&age=23


//using Template Literals

const name="Uvais";
const age=23;
const url2=`https://example.com?name=${name}&age=${age}`;
console.log(url2);  //https://example.com?name=Uvais&age=23

//using URLSearchParams

const params=new URLSearchParams({
    "name":"Uvais",
    "age":"23",
    "city":"Budaun",
    "Degree":"BCA",
    "Skills":["HTML","CSS","JAVASCRIPT","REact.js"],
    "semister":"6th"
});
const url3=`https://example.com/?${params}`;
console.log(url3);   //https://example.com/?name=Uvais&age=23&city=Budaun&Degree=BCA&Skills=HTML%2CCSS%2CJAVASCRIPT%2CREact.js&semister=6th


//Using Path Parameters

const userId=101;
const url4=`https://example.com/users/${userId}`;
console.log(userId);  //101


//Real Api Example
const city="Delhi";
const url5=`https://api.example.com/weather?city=${city}`;

fetch(url)
.then(res=>res.json())
.then(data=>console.log(data));


//Fetch Example
fetch("https://example.com/users",{
    method:"GET",
    header:{
        "content-Type":"application/json",
        "Authorization":"Bearer you_Token"
    }
})
.then(res=>res.json())
.then(data=>console.log(data));