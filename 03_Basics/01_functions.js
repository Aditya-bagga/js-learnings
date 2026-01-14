// function sayMyName(){
//     console.log("aditya")
// }

// // sayMyName()

//                       //parameters when definig a function
// function addTwoNumbers(x,y){
//     console.log(x+y);
    
// }
// addTwoNumbers(1,2) //arguments when calling function
// // addTwoNumbers(x,y)
// addTwoNumbers(3,"4")
// addTwoNumbers("a","b")
// addTwoNumbers(3,null)

// const result = addTwoNumbers(3,5)

// console.log(result); //undefined as function isnt returning anything 

// function addTwoNumbers2(x,y){
//     return x + y              //after return code becom unreachable
// }

// const number = addTwoNumbers2(3,4)
// console.log(number);



//        //username = "sam" predefined and we will not enter undefined
// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("please enter a username");
//     //     return
        

//     // }
//     if(!username){ //same as above
//         console.log("please enter a usernmae");
//         return
        
//     }

//     return `${username} just logged in`

// }

// console.log(loginUserMessage("Aditya"))
// console.log(loginUserMessage())//undefined just logged in


///////////// part 2-----------------

//when we dont know the total inputs in a function....
//rest opertor ...  and they got added in a array
// function calculateCartPrice(...num1){
//     return num1

// }
function calculateCartPrice(val1,val2,...num1){ //first two values in val1 and val2 rest in array
    return num1

}
// console.log(calculateCartPrice(200,400,600,2000))

const user = {
    username : "aditya",
    prine : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user) //can pass direct object here as well({ })

const myArray = [1,23,4,5]
//passing array to function 
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray)) //we can directly add array here too
