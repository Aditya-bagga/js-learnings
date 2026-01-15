// const userEmail = "a@gmail.ai" //if value exist then it is true empty ->false
// //truthy and falsy value......
// if(userEmail){
//     console.log("got user email");
    
// }
// else{
//     console.log("Dont have user email");
    
// }


//falsy values: 
// false , 0 , -0, (BigInt) 0n , "" , null , undefined , NaN

//truthy values:
// true , "0" , 'false' , " ",[] ,{} ,function(){} <- empty fn , 



// const userEmail = []

// if(userEmail.length ===0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("empty object");
    
}


// false ==0 -> true false==''->true 0==''->true

// nullish coalescing operator(??): null undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1) ->5

val1 = null ?? 10

// console.log(val1); ->10

// val2 = null ?? 10 ?? 15
// console.log(val2)


//ternary operator


// condition ? true : false

const iceTeaPrice= 100

iceTeaPrice > 80 ? console.log("cheaper") : console.log("expensive");

