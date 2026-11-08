let name="Uvais";//global scope
function outer(){
    let age=23;//in the outer function
    function inner(){
        console.log(name);
        console.log(age);
    }
    inner();//inner dono varriables ko access kar sakta hai
}
outer();


