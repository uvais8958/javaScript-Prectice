// let url=fetch("https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=a22a49ae0e1718dbde7f30a9435d477f");
// url.then(response=>response.json())
// .then(data=>console.log(data));


//convert Between Object and Json
// const user={
//     "name":"uvais",
//     "age":23,
//     "city":"Budaun",
//     "skills":["HTML","CSS","JavaScript","React.js","Node.js"]

// };

// const JSONData=JSON.stringify(user);
// console.log(JSONData);



// const user={
//     name:"uvais",
//     age:23,
//     city:"Budaun",
//     skills:["Html","CSS","JS","React.js"],
//     country:"India"
// }


// const json=JSON.stringify(user);
// const obj=JSON.parse(json);
// console.log(obj.skills[3]);



//Nested JSON=>Object
const student=`{"name":"Uvais","address":{"city":"Budaun","state":"UP"}}`

const details=JSON.parse(student);
console.log(details.address.state);//UP









//convert Between JSON and object

