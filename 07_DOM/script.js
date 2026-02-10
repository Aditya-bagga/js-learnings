// console.log(window) // node : window is not defined
// window.document.write("hello from JS")

// function changeBackgroundBlack(){
//     document.body.style.backgroundColor = 'black';
// }
// voilation of DRY principle here...so

// function changeBackgroundWhite(){
//     document.body.style.backgroundColor='white';
// }


function changeBackground(color){
    document.body.style.backgroundColor = color;
}


const darkButton = document.getElementById('dark-mode-button')
// console.log(darkButton);

// darkButton.innerText = 'hahhahaha'

// darkButton.addEventListener('click',function(){
//     console.log('I got clicked');
//     changeBackground('black');
// })

// darkButton.addEventListener('click' , function(){
//     console.log('storing dark mode value in DB');
    
// })

//toggle switch
darkButton.addEventListener('click',()=>{
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor

    if(!currentColor || currentColor == 'white'){
        changeBackground('black');
        darkButton.innerText ='Light mode';
    }

    else{
        changeBackground('white');
        darkButton.innerText ='Dark mode';
    }
})