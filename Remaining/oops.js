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

// OBJECT created using object literal syntax (Instance of an object)**


let car = {
    make: "Toyota",
    model : "Camry",
    year  : 2020,
    start : function (){
        return `${this.make} car got started in ${this.year}`;
    }
}
// console.log(car.start());

//COnstructor fn
function Person(name,age){
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe" , 20);
// console.log(john);


function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.aditya = function(){
    return `custom method ${this}`
}

let myArray = [1,2,3,4]
// console.log(myArray.aditya());

class Vehicle {
    //function declared inside class : methods
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car9 extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}


let myCar1 = new Car9("Toyota" , "Corolla")
// console.log(myCar1.start());
// console.log(myCar1.drive());

let vehOne = new Vehicle("Toyota" , "Corolla");
// console.log(vehOne.make);

//-------------------------------------------------------------------------------------

//Encapsulation : restriction of direct access of object data 

class BankAccount{
    #balance = 0; // adding # before and it cant be accessed directly
    deposit(amount){
        this.#balance +=amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance())


// Abstraction..........
// hides the complex things....

class CoffeeMachine{
    start(){
        //call DB
        //filter value

        return `Starting Machine`
    }
    brewCoffee(){
        //complex calculation 
        return `Brewing coffee`;
    }

    pressButton(){
       let msgOne= this.start()
        let msgTwo=this.brewCoffee()
        return ` ${msgOne} + ${msgTwo}`;
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());


// console.log(myMachine.pressButton());

// with pressButton fn the user just have to press button and his coffee is done, now he doenst need to 
// know what things are going on


// POLYMORPHISM

//the ability of something to have or to be displayed in or more than formn


class Bird{
    fly(){
        return `Flying........`;
    }
}

class Penguin extends Bird {
    fly(){
        return `penguins cant fly`;
    }
}

class Sparrow extends Bird{

}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());


//------------------------------------------------------------------------

//static method: only called by class itself

class Calculator {
    static add(a,b){  // 
        return a+b;
    }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3)); cant be accessed by object / 
// console.log(Calculator.add(2,3))

// ----------------------------------------------------------

//getters and setters 


class Employee{
    #salary;
    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary cant be neghative");
            
        }
        this.name = name;
        this.#salary = salary; //_salary udnerscored : there is something special about this and something is about to come(good practice)
    }

    get salary(){
        return `you are not allowed to see salary`;

    }
    // who can set and get the value......
    set salary(value){
        if(value<0){
            console.error("Invalid Salary");
        }
        else{
            this._salary = value
        }
    }
}

let emp = new Employee("Alice",50000);
// console.log(emp.salary=90000);
// console.log(emp.salary);

// we cant add a method directly inside a function , like add(){} , function sum{sum.prototype.add=function(){}}
// prototype chaing : 
/*
function Animal(){
}
Animal.prototype.speak = function(){
return 'Animal speaking';}

function Dog(){
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    return this.speak() + " Woof!";
};

let dog = new Dog();
console.log(dog.bark());





*/