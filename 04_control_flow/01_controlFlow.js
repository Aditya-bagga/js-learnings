// // if

// const isUserLoggedIn = true

// if(isUserLoggedIn){

// }

// // < , > , >= ,<= ,>=,==(doesnt check type), != , ===(type check as well) 

// const temprature = 41
// if(temprature <50){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature more than 50")
// }

// const power = "fly"
// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }
// console.log(`user power : ${power}`)


// const balance = 1000

// // if(balance > 500){

// // }
// // if (balance>500) console.log("test");  //implicit scope... no multiple lines but can be done by adding ','


// if (balance < 500){
//     console.log("less than ");
    
// }
// else if ( balance <750){
//     console.log("less than 750")
// }else if (balance <900){
//     console.log("less than 900");    
// }
// else{
//    console.log("less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}
