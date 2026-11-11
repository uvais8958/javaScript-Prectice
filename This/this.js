const user={
    name:"Uvais",
    age:23,
    showDetails:function(){
        console.log(this.name);
        console.log(this.age);
    }
}
user.showDetails();//Uvais
//                    //23


//                    //this in a regular function
                   function show(){
                    console.log(this);
                   }
                   show();



//this in an arraow function

const Student={
    name:"Uvais",
    show:()=>{

        console.log(this.name);
    }

}

Student.show();//undefined



const student2={
    name:"Uvais",
   show: function(){
    console.log(this.name);
   }
}
student2.show();//Uvais


const student3={
    name:"Vatsal",
    greet:()=>{
        console.log(this.name);
    }
}
student3.greet();//undefined