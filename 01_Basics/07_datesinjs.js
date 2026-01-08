let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);


// let myCreatedDate = new Date(2023,0,23) //month starts from 0 here
// let myCreatedDate = new Date(2023,0,23,5,3) //month starts from 0 here
// let myCreatedDate = new Date("2023-01-14") // now month start from 1
let myCreatedDate = new Date("01-14-2023") // now month start from 1

// console.log(myCreatedDate.toLocaleString());



// let myTimeStamp = new Date() // or Date.now()

// console.log(myTimeStamp)

// let myTimeStamp1 = Date.now()
// console.log(myTimeStamp1);
// console.log(myCreatedDate.getTime()); //milisec from 1970 (maybe**)
console.log(Date.now()/1000); //milisec from 1970 (maybe**)
console.log(Math.floor(Date.now()/1000))


let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
   
})

