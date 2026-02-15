// JS initially and still prototype based programming language
// JS  : added synctatically sugar : Object oriented programming language

// object/ instance of class , class which is blueprint 

// object can have a special feature 

// prototype based     // Obejct based
                
                //Javascript : class , object , constructor ( we are pretending its oop but we come back at prototype based , it looks like)
                // (its class based but its just a mask....)
                // (Is it truly oop based : yeah it supports everything , but behind the scene still prototype )

// prototype : extra properties and functionality in any given datatype....


let computer = {
    cpu : 12
}

let lenovo = {
    screen : "HD",
    __proto__ : computer // accesing properties of computer  // older way we have to hunt the introduction 
};

let tomHardware = {}

// console.log(`computer` , computer.__proto__); //two underscore : dunder , here output : {} bcz its default properties doesnt find necessary to show
// console.log(`computer` , lenovo.__proto__); //two underscore : dunder , here we explicitly defined proto , 


let genericCar = {tyres:4

}

let tesla = {
    driver : "AI" 
}


//older way : __proto__:, Object.setPrototypeOf(tesla , genericCar) 
Object.setPrototypeOf(tesla,genericCar)  

// console.log(`tesla` , tesla.tyres);
// console.log(`tesla`, Object.getPrototypeOf(tesla));
// console.log(`tesla` , tesla.hasOwnProperty('tyres')  );

// has own property -> if its own property or ingherited one gives boolean result......

// still better way for this:
const tata = Object.create(genericCar);
// console.log(tata.tyres);


//----------------------------------------------------------------------------------------------------------------------



// Constructor Function:


// function greet(name){ //normal fn

//     console.log("hello",name);
    
// }
// good practice::: capital letter , var_name same as parameter


function Person(name,age){
    this.name = name
    this.age = age
}

function Car(make,model){
    this.make = make
    this.model = model // this is refering to newly created object
}

let myCar = new Car("Toyota" , "Camry")
// console.log(myCar);

let myNewCar = new Car("Tata" , "safari")
// console.log(myNewCar);


function Tea(type){ //anything defining inside constructor fn need this
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea")
// console.log(lemonTea.describe())

function Animal(species){
    this.species = species;

}


Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("dog")
// console.log(dog.sound());

// this provide the modern context over here as we are switching between species and getting them print
let cat = new Animal("cat")
// console.log(cat.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new Keyword");
    }
    this.name =  name
}
let tea = new Drink("tea");
// let coffee = Drink("coffee");


// So above defined are normal functions , it becomes a constructor when called with a new , it initialises property using this
//let dog = new Animal("dog");

//Internally: All this is happening in one line

/*let dog = {};
dog.__proto__ = Animal.prototype;
Animal.call(dog, "dog"); “Run the Animal function, but make this refer to the object dog.”
return dog;
*/




//-------------------------------------------------------------------------------------------------------

// Classes Objects and inheritance in js

//OOP 

//ENCAPSULATION , INHERITANCE , POLYMORPHISM , ABSTRACTION

