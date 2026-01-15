const user = {
    username: "aditya",
    price : 999,

    welcomeMessage : function(){ //this creates current context 
        console.log(`${this.username} , welcome to website`);
        console.log(this); //all values in the context
        
    }

}

// user.welcomeMessage
// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()


// console.log(this);  //in node environment its empty //in browser this is window



// function chai (){
//     let username= "aditya"
//      console.log(this)
//     console.log(this.username);  //->undefined 
// }
// chai()


const chai = ()=>{
    let username = "aditya"
    console.log(this)
    console.log(this.username)
}
// chai()


// const addtwo=(num1 , num2)=>{
//     return num1 + num2 

// }

// console.log(addtwo(3,4)


// implicit return:

//used in react.......

// const addTwo = (num1 , num2 )=> num1 + num2
// const addTwo = (num1 , num2 )=> (num1 + num2) //parenthesis work well when we have to return objects
// const addTwo = (num1 , num2 )=> ({username : "aditya"} )


//explicit return whe we used return...



const myArray = [1,2,3,4,5]

// myArray.forEach(function(){})
// myArray.forEach(()=>{

// })

