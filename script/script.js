let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];

    addButton.addEventListener('click', function(){

       let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
        };

    todoList.push(newTodo)
    displayMessages()
        console.log(addMessage.value);
    });

    function displayMessages(){

todoList.forEach(function(item, i){
    let displayMessage = `
    <li>
    <input type='checkbox' id='item_${i}'>
    <label for='item_${i}'>${item.todo}</label>

    </li>
    `;
    todo.innerHTML = displayMessage;
    });

}