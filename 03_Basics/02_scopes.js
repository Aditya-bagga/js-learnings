// //global scope
 
// if(true){
// let a = 10
// const b =20. //block scope
// var c = 30
// }

// // console.log(a); //a and b not accessible
// // console.log(b);
// console.log(c);  ->30

//part 2.......


function one(){
    const username = "aditya"

    function two(){
        const website = "youtube" 
        // console.log(username)
    }
    // console.log(website);

    two()
}

one()


if(true){
    const username  = "aditya"
    if(username ==="aditya"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);   //line by line execution
}

// console.log(username);




//------------------------------------interesting.....

console.log(addone(5)) //yes we can access like this....


function addone(value){
    return value+1.    //function type 1
}


addTwo(5)

const addTwo = function(num){        //declaration + variable assogning here we cant access function before initialization
    return num + 2                   //function but also called expression
}


