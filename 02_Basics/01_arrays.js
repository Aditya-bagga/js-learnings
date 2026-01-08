//array 


const myArr = [0,1,2,3,4,5];//js arrays are resizeable 

console.log(myArr[1]);

//array copy operation create shallow copies (copy whose properties share the same ref point)
// deep copy(doesnt share the same reference point)

const myHeros = [ "shaktiman" , "Hatim" ,"Gogo"]
const myArr2 = new Array(1,23,4,5)

//methods...........


myArr.push(6)
myArr.push(7) // add value at the end

myArr.pop() //removes last value


myArr.unshift(9) //add to start
console.log(myArr)

myArr.shift()
console.log(myArr);//removes from start


console.log(myArr.includes(9))

console.log(myArr.indexOf(9))//-1 doesnt exist

console.log(myArr.indexOf(3))


const newArr = myArr.join() //on joining it become string
console.log(myArr)
console.log(typeof newArr) 

//slice , splice


console.log("A" , myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B" , myArr)

const myn2 = myArr.splice(1,3) // this portion is removed from the orignal array (manipulates orignal array) thats the diff bw slice and splice
console.log(("C") , myArr)

console.log(myn2)

