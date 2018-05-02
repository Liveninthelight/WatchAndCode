var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function (todoText) { //addTodo('hi')
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        // this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};



{
    todoText: 'item 1',
    completed: false // Boolean true or false
}