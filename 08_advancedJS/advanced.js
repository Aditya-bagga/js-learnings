/*asynchronus js

*/
//not following sequence : asynchronus nature of JS
// console.log("chaicode");


// function sayHello(){
//     console.log("i would like to say hello");
// }


// setTimeout(() => {
//     sayHello();  // acc to sequence this thing should load first but it didnt

// }, 2000);



// for (let index = 0; index < 5; index++) {
//     console.log(index);
    
// }



//keep on runing line by line - synchronised that way..
//async - break down , have a pause in language , pause behaviour is required
// why do we need a pause in a lannguage :
//network calls 
// write/read from files
//time functions
//user input
//....etc


//IMP : Event loop
// fn loaded in call stack , event loop do i have something to execute in call stack
// job done , eventloop remove fn from call stack , 
//timer and network calls are not done with js 
// whatever js cant do it pass to environement : its transfered to browser/node/bun/deno then to queue
//then event loop will execute from queue

/* Javascript is single threaded that means it has one call stack
and executes one thing at a time : so js runs synchronously by default

*/

// -------from scratch--------
/*process: when we open a program, the OS creates a process 
like chrome , vs code , node js program or python script each program
runs as a process

inside process there are things like : memory , thread , heap , stack
thread : a unit that executes instruction
Thread = worker that executes code
Restaurant = Process
Chef = Thread : one order at a time

stack is a data structure : LIFO
call stack : where JS stores funciton execution
whenever function runs it goes into stack

function a(){
 console.log("A")
}

function b(){
 console.log("B")
}

a()
b()

Step 1

Global execution starts.
Step 2

a() is called :console.log('A') : after finishing a() removed from stack

synchronus execution : js runs line by line

Some operations take time.

Example:

network request

database

timer

file reading

setTimeout(()=>{
 console.log("Hello")
},2000)

Timer = 2 seconds.

If JS waited 2 seconds in call stack, the entire browser would freeze.

That would be terrible.

So JavaScript delegates that work.

JavaScript engine alone cannot do timers or network calls.

These are handled by the runtime environmet , these env provide API's

           CALL STACK
                |
                v
             EVENT LOOP
                |
                v
           TASK QUEUE
                ^
                |
            WEB APIs

console.log("Start")

setTimeout(()=>{
 console.log("Timer")
},2000)

console.log("End")

Step 1
Call Stack
console.log("Start") -> start

step2:

JS sees:

setTimeout

But JS cannot run timers.

So it sends it to Web APIs.

Web API
timer running

Call stack continues.

Step 3

Next line:

console.log("End")

Output:

End

Step 4

Timer finishes after 2 seconds.

Callback moves to:

Task Queue
Queue
---------
console.log("Timer")
Step 5

Event Loop checks:

Is call stack empty?

If yes →

Move queue task to stack.

Step 6
Call Stack
console.log("Timer")

Output:

Timer

final : 
start
end 
timer

Chef = Call Stack
Assistants = Web APIs
Waiting orders = Queue
Manager = Event Loop

Chef busy → assistants do long tasks
Task done → order in queue
Manager checks chef free → give next order

The event loop constantly checks:

while(true){
 if(callStack is empty){
   move task from queue → stack
 }
}



*/


// closures :  are functions , they remember the ennvironemnt in which they are created

// function outer(){
//     let counter = 4 ;
//     return function(){
//         counter++
//         return counter
//     }
// }

// let increment = outer();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

/*
4. Normally What Should Happen?

Normally when a function finishes:

its local variables are destroyed

Example:

outer() finishes
counter should disappear

BUT JavaScript sees something special:

The returned function still needs counter.

So JavaScript keeps that environment alive.

That remembered environment = closure.

*/



//  promises and promise chaining

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetcehd siuccessFully");
            }else{
                reject("Error in fetching data");
            }
        },3000);
    })
};

// let response = fetchData();
// console.log(response);

// fetchData()
//     .then((data)=>{
//         console.log(data)
//     })
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
    

/* But when programs grow, asynchronous code becomes messy.

loginUser(function(user){
    getUserPosts(user, function(posts){
        getComments(posts, function(comments){
            console.log(comments);
        });
    });
});

This is called:

Callback Hell

Problems:

hard to read

hard to debug

nested code

Promises solve this.

2. What is a Promise?

A Promise is an object that represents the future result of an asynchronous operation.

Think of it like:

"I promise I will give you the result later."

Example real-life promise:

You order food → promise created
Food delivered → fulfilled
Food cancelled → rejected
3. Promise States

A promise has 3 states.

1. Pending
2. Fulfilled
3. Rejected


*/