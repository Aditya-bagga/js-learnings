let marvel_heros = ["thor" ,"Ironman" ,"spiderman"]
let dc_heros = ["superman" , "flash" ,"batman"]

// marvel_heros.push(dc_heros) //array inside array (can push any data)
// console.log(marvel_heros) 
// console.log(marvel_heros[3][1]) // accessing array inside a array

// let all_heros=marvel_heros.concat(dc_heros); //concat doesnt change in the orignal array
// //returns a new array instead 
// console.log(all_heros);


//spread operator.........


const all_heros = [...marvel_heros, ...dc_heros] //can join many values which we cant do in concat
// console.log(all_heros);

const another_array =[ 1, 2, 3 , [4,5,6] ,7 ,[6,7,[4,5]]] //situation handling : flat

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);






console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh")) //convert string to array
console.log(Array.from({name:"aditya"})) //we need to tell keys array or value array ddidnt tell = empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //creating array from variables.....





