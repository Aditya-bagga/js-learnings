// const buttons = document.querySelectorAll('.btn')
// const screen = document.getElementById('screen')
// const equals = document.getElementById('equals');
// const clear = document.getElementById('remove');



// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         screen.innerText += button.innerText;
//     });
// });



// equals.addEventListener('click', () => {
//     screen.innerText = eval(screen.innerText);
// });


// clear.addEventListener('click', () => {
//     screen.innerText = "";
// });

// const buttons = document.querySelectorAll('.btn');
// const screen = document.getElementById('screen');

const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const screen = document.getElementById('screen');

let expression = "";

// Number + Operator buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        expression += button.innerText;
        screen.innerText = expression;
    });
});

// Clear button
clearBtn.addEventListener('click', () => {
    expression = "";
    screen.innerText = "";
});

// Equals button
equalsBtn.addEventListener('click', () => {
    try {
        expression = eval(expression);
        screen.innerText = expression;
    } catch {
        screen.innerText = "Error";
        expression = "";
    }
});