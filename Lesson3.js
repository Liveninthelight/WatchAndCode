var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
};


var joe = {
    name: 'Joe',
    sayName: function() { // This is called a Method
        console.log(this.name);
    }
};

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

//  function deleteTodo(position) {
//      todos.splice(position, 1);
//      displayTodos();
//  }

//    function changeTodo(position, newValue) {
//        todos[position] = newValue;
//        displayTodos();
//    }
    
//  function addTodo(todo) {
//    todos.push(todo);
//    displayTodos();
//  }