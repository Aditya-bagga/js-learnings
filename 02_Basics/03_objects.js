// singelton :  if with constructor then it singelton 
//object literals
// Object.create() constructor way


const mySym = Symbol("key1")


const jsUser = {  //key value pair already conside key as string... 
    name: "aditya",
    "full name" : "Aditya bagga",

    [mySym]:"mykey", //symbol
    age:18,
    location : "delhi",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Tuesday"]
}

// console.log(jsUser.name); //
// console.log(jsUser["full name"]); //
// console.log(jsUser["name"]); 
// console.log(jsUser[mySym]);



jsUser.age = 90
// Object.freeze(jsUser); //no changes would be made further....


jsUser.greeting = function(){
    console.log(`Hello js user ${this.name}  `)
}

console.log(jsUser.greeting); // returned reference of function
console.log(jsUser.greeting()); 