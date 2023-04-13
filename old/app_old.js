// DataService.getTodos(console.log)

DataService.getTodos()
.then(data => Todolist.fromObjectArray('ToDo List', data))
.then(todoList => {
    addButtonsListeners(todoList);
    displayTodos(todoList);
});

// function transformData(data) {

//     const newTodoList = new Todolist('Lista Base');
//     for (let i = 0; i < data.length; i++) {
//         const todoObject = data[i];
//         const newTodo = new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id)
//         newTodoList.addTodo(newTodo);
//     }
//     console.log(newTodoList)
// }

function displayTodos(todoList) {

    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');

    const titleNode = document.createTextNode(todoList.title);
    todoListTitle.innerHTML = '';
    todoListTitle.appendChild(titleNode);

    
    todoListUl.innerHTML = '';

    for (let i = 0; i < todoList.todoArray.length; i++) {

        const todo = todoList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

        const titleSpan= document.createElement('span');
        titleSpan.classList.add('todo-title')

        const dateSpan= document.createElement('span');
        dateSpan.classList.add('todo-date');


        const titleNode = document.createTextNode(todo.title);
        const dateNode= document.createTextNode(todo.creationDate);

        const removeBtn = document.createElement('button');
        const textBtn = document.createTextNode('Remove ToDo');

        

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);

        removeBtn.appendChild(textBtn);
        newLi.appendChild(removeBtn);
        removeBtn.classList.add('remove-btn');
        
        todoListUl.appendChild(newLi);

    };

};
    
function orderByTitle(todoList) {
    todoList.sortByTitle();
    displayTodos(todoList);
};

function orderByDate(todoList) {
    todoList.sortByCreationDate();
    displayTodos(todoList);
};

function addButtonsListeners(todoList) {
    const orderTitleBtn = document.getElementById('order-title-btn');
    orderTitleBtn.addEventListener('click', (event) => orderByTitle(todoList));

    const orderDateBtn = document.getElementById('order-date-btn');
    orderDateBtn.addEventListener('click', (event) => orderByDate(todoList));
}
