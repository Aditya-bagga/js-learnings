// Immediately Invoked Function Expression(IIFE)
//named iife
(function chai(){
    console.log(`DB connected`);
})();

// ()() declaration and execution..... //problem due to global scope pollution....

//iife
( (name)=>{
    console.log(`DB Connected two ${name}`)
})('aditya')


