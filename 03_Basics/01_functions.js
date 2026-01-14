function sayMyName(){
    console.log("aditya")
}

// sayMyName()

                      //parameters when definig a function
function addTwoNumbers(x,y){
    console.log(x+y);
    
}
addTwoNumbers(1,2) //arguments when calling function
// addTwoNumbers(x,y)
addTwoNumbers(3,"4")
addTwoNumbers("a","b")
addTwoNumbers(3,null)

const result = addTwoNumbers(3,5)

console.log(result); //undefined as function isnt returning anything 

function addTwoNumbers2(x,y){
    return x + y              //after return code becom unreachable
}

const number = addTwoNumbers2(3,4)
console.log(number);



       //username = "sam" predefined and we will not enter undefined
function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
        

    // }
    if(!username){ //same as above
        console.log("please enter a usernmae");
        return
        
    }

    return `${username} just logged in`

}

console.log(loginUserMessage("Aditya"))
console.log(loginUserMessage())//undefined just logged in

