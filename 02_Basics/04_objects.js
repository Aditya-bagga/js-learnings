//object 

const tinderUser = new Object(); 


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoogedIn = false



// console.log(tinderUser);



const regularUser={
    email: "some@gmail.com",
    fullname : {
        userFullName : {
            firstname : "adi",
            lastname : "bagga"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname); //accessing nested obects........

const obj1 = {
    1:"a",
    2:"b",
    
}
const obj2 = {
    3:"a",
    4:"b",
    
}

// const obj3 = {obj1 , obj2} // nested object
// console.log(obj3);


// const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3);
// const obj3 = Object.assign({},obj1 , obj2) //good practice of giving {} consider as target other as source 
// console.log(obj3);



const obj3 = {...obj1, ...obj2}//spread operator 
// console.log(obj3);


const users = [
    {
        id:1,
        email: "h@gmail.com"
    }
]

// users[1].email

console.log(tinderUser);


console.log(Object.keys(tinderUser)); //in the form of arrays.....
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoogedIn'));  //truee....



