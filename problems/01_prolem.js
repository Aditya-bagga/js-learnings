const chai = {
    name : "lemon tea",
    type : "green",
    caffine : "low"
}


console.log(chai.name);
console.log(chai["type"]);

chai.origin = "china" //its const so changes ? yes

chai.caffine = "medium"

delete chai.type //delete key value


console.log(chai);


console.log("origin" in chai);


for( let key in chai){
    console.log(key + ":" + chai[key] );
    
}

const nestedObject= {
    greentea : {
        name : "green tea"
    },
    blackTea : {
        name : "black tea"
    }
}

// create a copy of tea object


const teaCopy = {...chai}



Object.prototype.chai = function(){
    console.log("chai aur code");
}

const tea = {
    name:"Ice tea lemon",
    type : "cool"
}

tea.chai()
const myTeas = ["lemon tea" ,"orange tea"]
myTeas.chai()