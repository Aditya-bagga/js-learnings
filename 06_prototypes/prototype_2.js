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
    getFullname : function(){
        return `${this.fname} ${this.lname}`
    }
}
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
// console.log(p1);
// console.log(p2);
// console.log(p1.getFullname());
// console.log(p2.getFullname());


