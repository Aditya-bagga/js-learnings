// // // Finally DOM (Introduction to DOM)

// // Function.prototype.describe = function(){
// //     console.log(`function name is ${this.name}`); // game of this , this (thinks of context)
    
// // }

// // function say(name){
// // return `hello ${name}`
// // }
// // say.describe();


// // parameter for placeholder , argument when output

// function add(a,b){ //function declaraation
//     return a+b
// }

// const subtract = function(a,b){
//     return a-b               //function expression
// }

// const multiply  = (a,b)=>a*b // arrow fn


// // first class function - when function is treated as some other variable and can be returned too
// function applyOperation(a,b,operation){
//     return operation(a,b)

// }

// const result  = applyOperation(5,4,(x,y)=>x/y)

// function createCounter(){
//     let count =0;
//     return function(){
//         count++;
//         return count
//     }
// }
// const counter = createCounter()
// console.log(counter());





// // function onef(){
// //     let myName = "aditya";
// // }

// // console.log(myName);

// //IIFE function (immidiately invoked function expression)

// (function(){
//     console.log("aditya");
    
// })();



