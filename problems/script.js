const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items-container');
const removeAll = document.getElementById('remove-all-btn');

addBtn.addEventListener('click' , ()=>{
    const value = todoInput.value;
    // console.log('user entered ' , value);

    const li = document.createElement('li') // li tag created
    li.innerText = value // user ne jo dala isme agya
    console.log(li);
    
    const delButton = document.createElement('button'); // here we need button so we created it
    delButton.innerText = 'X'; // then we add inner text
    li.appendChild(delButton); // then we joins it to the li

    delButton.addEventListener('click' , ()=>{
        li.remove();
    });

    todoItemsContainer.appendChild(li);
    todoInput.value = ''; // after adding placeholder becomes empty
});

removeAll.addEventListener('click',()=>{
    todoItemsContainer.innerHTML = '';
})