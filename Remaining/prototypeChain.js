// prototype chaining : 
//  prototype being an internal property of javascript , whichcomes into picture while we are 
/* trying to access some property of that object , but its scope of looking for that property
is not limited to its object it reaches to its prototype , prototype's prototype until this chain
reaches null -> undefined , (prototype chaining) */

// obj.__proto__ or 0bj.[[Prototype]]

// with the help of prototypes we can reuse the set of values....

// const boxPrototype = {
//     getValue(){
//         return this.value;
//     }}


// const boxes = [
//     {value : 1 , __proto__ : boxPrototype},
//     {value : 2 , __proto__ : boxPrototype},
//     {value : 3 , __proto__ : boxPrototype},
// ]
// console.log(boxes[0].getValue());
// console.log(boxes[1].getValue());
// console.log(boxes[2].getValue());



function Box(value){
   this.value = value;

}
Box.prototype.getValue = function(){
    return this.value;
}

const Boxes = [new Box(1) , new Box(2), new Box(3)]
// ;console.log(Boxes[0].getValue());
// console.log(Boxes[1].getValue());
// console.log(Boxes[2].getValue());

function Animal() {
}
 
Animal.prototype.speak = function() {
  return 'Animal speaking';
};
 
function Dog() {
}
 
Dog.prototype = Object.create(Animal.prototype);
 
Dog.prototype.bark = function() {
  return 'Woof!';
};
 
Dog.prototype.constructor = Dog;



// In JavaScript, objects are NOT copied when assigned.

// They are shared.

// Dog.prototype = Animal.prototype; “Both variables point to the SAME object.”
// now they are pointing to same object , as we create .bark() , then Animal will also have .bark()
// Same object.
// Shared mutations.
// Chaos.



// Dog.prototype = Object.create(Animal.prototype);

// New object.
// Linked.
// Safe.
// Clean inheritance




// As we create function Something(){}
// js automatically creates Something.protoype = {constructor:Something};


// As we replaced the prototype of dog -> Object.create(Animal.prototype), so constructor property
// got replaced with all Animal.prototype which will have its own constructor

// constructor function and constructor property of prototypes two different things:
// Why? Dog.protoype.constructor = Dog;

// Because every object created with new Dog() should be traceable back to the function that created it.

// Think of it like a “manufacturer tag”.