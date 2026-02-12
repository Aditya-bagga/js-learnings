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

console.log(`tesla` , tesla.tyres);
console.log(`tesla`, Object.getPrototypeOf(tesla));
console.log(`tesla` , tesla.hasOwnProperty('tyres')  );

// has own property -> if its own property or ingherited one gives boolean result......

