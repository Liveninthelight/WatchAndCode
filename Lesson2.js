var todos = ['item 1', 'item 2', 'item 3']
function displayTodos() {
    console.log('My todos:', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('some stuff')
displayTodos()



function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}