// for of loop :

const arr = [1,2,3,4,5]

// for (const element of object) {
    
// }

for (const val of arr){
    // console.log(val);
    
}


const greeting = "hello world";
for(const greet of greeting){
    // console.log( greet );
    
}


//maps....
//cant have duplicate values...


const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('fr' , "france")

// console.log(map);

for (const [key,value] of map){
    // console.log(key); //array
    // console.log(key,'-' , value);
}


const myObject = {
    game1 :'nfs',
    game2:'spiderman'}
//for of not for objects....
// for(const [kay , value] of myObject){
//     console.log(key,value);  //object not iterable in this way
    
// }

 