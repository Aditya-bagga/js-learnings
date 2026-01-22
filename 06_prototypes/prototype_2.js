//Objects : representing real world entities.... 
/*
which has some properties and some functionality(methods)
function vs methods:
if a fn standalone -> function
if a fn part of object -> method

JS: interactivity on browser...
with time-nodeJs (js as a standalone programming lang)
1) 
const obj = {
key : value
}
problem : two objects same type , then we have to write all keys by. my self
person1 = {fname , lname , 20+} 
person2 = {fname , lname , 20+} 

chances of bugs increase

ES6 classes : 

class Person(){
        ..schema
}
//blueprint define , then create multiple objects
const p1 = new Person()
const p2 = new Person()
then whole schema in both two objects
:- Single parent....

new keyword : go to heap and allocate new memmory and return address..
p1 in stack : its value is address which is in heap

class: blueprint
we can create object of this class, 
we can construct objects....
then we need a constructor

class Person{

}
const p = new Person()
then a default constructor is created by itself (when we didnt create a constructor)
constructor(){
} 
like this empty one 

parameterised constructor:
when we need input ....
class Person {
constructor(fname , lname){
this.fname = fname
this.lname = lname
}
}
const p = new Person("aditya" , "bagga")

 
*/

const obj1 = {
    fname : "aditya",
    lname : "bagga",
    getFullname : function(){
        return `${this.fname} ${this.lname}`
    }
}
const obj2 = {
    fname : "divya",
    lname : "bagga",
    // getFullname : function(){
    //     return `${this.fname} ${this.lname}`
    // }
    //__proto__ :Object
}
//obj1.__proto__.__proto__=null
obj2.__proto__ = obj1;  //prototype inheritance....//chaining. // shouldnt be done this way...
// console.log(obj2.getFullname())
// console.log(obj2.toString())


// console.log(obj1);
// console.log(obj1.getFullname());

//DRY priciple dont repeat yourself  , here we manually created two objects.. 


class Person {
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname

    }

    getFullname(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person('Aditya' , 'Bagga')
const p2 = new Person('Guddu' , 'Budhu')
const p3 = new Person('poco','5g')
// console.log(p3.getFullname());

// console.log(p1);
// console.log(p2);
// console.log(p1.getFullname());
// console.log(p2.getFullname());


// Person.prototype will be equal to p1.__proto__

// const p1 = new Person() , we just put the prototype from class Person to there....



// why in JS everything isan object....

// .__proto__.__proto__ everything is object....
// hence everything is object...


// Blueprint -> Prototype
//Object -> __proto__ (Blueprint)
/* 
const p1= new Person()
p1.__proto__ = Person.prototype //internally this is happening when we do:
const p1 = new Person();
//Syntax sugar (syntactical sugar)





*/


class A {
    funcInisdeA(){

    }
}

class B extends A{
    funInsideB(){

    }
}

const b = new B();
// b.funInsideB();
// b.funInsideA()



/* 


function Name(){
}
var x = function(){
}

const add = (x,y)=>{
    return x+y
    }
const add = (x,y)=> return x+y
or const add = (x,y)=> x+y
arr.map(()=>{
    })
*/
