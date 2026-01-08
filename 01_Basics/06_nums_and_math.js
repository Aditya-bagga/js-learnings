// //Numbers

// const score = 400 //automatically detect 

// const balance = new Number(100) //explicitly telling
// console.log(score);

// console.log(balance);
// console.log(balance.toString()); //converts to string
// console.log(balance.toFixed(2)); //precision value (upto values told)
// console.log(balance.toString().length); //lenght of string

// const otherNumber = 123.1966

// console.log(otherNumber.toPrecision(4)); //round off values 

// const hundreds = 1000000

// console.log(hundreds.toLocaleString()); // commas added related to US standard
// console.log(hundreds.toLocaleString('en-IN')); // commas added related to IND standard


// // _________________________MATHS______________________________

// console.log(Math);


// console.log(Math.abs(-4)); // only neg val to positive (absolute)
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2)); //top val ->5
// console.log(Math.floor(4.9));//lower val ->4
// console.log(Math.min(4,3,5,7,2));
// console.log(Math.max(3,4,56,7));


console.log(Math.random());  // 0 to 1

console.log(Math.floor((Math.random()*10)) + 1);


const min = 10
const max = 20 
// to get in range multiply by max-min
// 1 is added to avoid zero , then we floor (it to prevent 20)
//then the value we got 1 to 9 then we add min value to be in the range 

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //imp 