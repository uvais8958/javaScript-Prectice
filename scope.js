// //scope
// let x=10;//Globla scope varriable
// function test(){
//     let x=20
//     console.log(x);//20
// }
// test();
// console.log(x);//10


// //block scope
// if(true){
//     let a=10;
//     var b=20
// }
// console.log(a);//error a is not defind
// console.log(b);//20


// console.log(a)
// var a=5;

// console.log(b)
// let b=10;
             //ReferenceError: Cannot access 'b' before initialization

//function scope
            // function demo(){
            //     let x=100;
            //     var y=200;

            // }
            //          console.log(x);
            //          console.log(y);      //  ReferenceError: x is not defined

                     
            //lexical scope
                    //  let a=20;
                    //  function outer(){
                    //     let b=10;
                    //     function inner(){
                    //         console.log(b+a);
                    //     }
                    //     inner();
                    //  }
                    //  outer(); //30



                     //Q1
                     console.log(a);//undefined
                     var a=10;  

                      //Q2
                      let x=5;
                      {
                        let x=10;
                        console.log(x);//10
                      }
                      console.log(x);//5

                 //Q3
                    //   greet();
                    //   var greet=function (){
                    //     console.log("hello bro");
                    //   };
                        //TypeError: greet is not a function
                            
                        // function test(){
                        //     var a=10;
                        //     if(true){
                        //         let b=20;
                        //         var c=30;
                            
                        //     }
                        //     console.log(a);
                        //     console.log(b); //ReferenceError: b is not defined
                        //     console.log(c);
                        // }
                        // test();


                        let name="Uvais";
                        function outer(){
                            let name="Developer";
                            function inner(){
                                console.log(name);//Developer
                            }
                            return inner;
                        }
                        const result=outer();
                        result();