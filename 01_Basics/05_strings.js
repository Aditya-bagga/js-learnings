// 'hello'. "hello" same thing in js 

const name = "Aditya"
const repoCount = 50 //1st way

console.log(name + repoCount + "Value"); //outdated version now use backticks(strings interpolation)

console.log(`hello my name is ${name} my repoCount is ${repoCount}`);

const gameName = new String("aditya-hc-com") //length property and methods we got with this way

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0 , 4) // 0 to n-1 last one not included it will ignore negative val
// console.log(newString); 


// const anotherString = gameName.slice(0,4) //we can add negative values too
// console.log(anotherString);

// const newString1= "    Aditya    "
// console.log(newString1);
// console.log(newString1.trim()); //remove spaces given 


// const url = "htt[s://aditya.com/aditya%20bagga"


// console.log(url.replace('%20' , '-'))

// console.log(url.includes('aditya')) //case sensitive



console.log(gameName.split('-')) //we have passed a seperator

