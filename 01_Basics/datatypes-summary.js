//primitive datatypes (call by value)
// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt , 


// if we have to tell datatype of the input->staticaly typed lang
//if not then it is dynamically typed lang




const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123');

const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 345673436563423422332n //add n now it is bigInt




// non primitive datatypes ( call by reference)
// Array , Objects , Functions 


const heros= ["shaktiman "  ,"bheem" ,"kirmada"];  //array
let myObj={
    name: "Aditya",   //object
    age: 23,
}


const myFunction= function(){
console.log("hello world");    //function

}


console.log(typeof bigNumber); //bigint
console.log(typeof myFunction); //function object


