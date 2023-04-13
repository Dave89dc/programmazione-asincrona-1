let superList = new Todolist('Super ToDo List');

displayTodos();

DataService.getTodos().then(data => {
    fillTodoArrayFromServer(data);
    displayTodos();
});

function fillTodoArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const todo = new Todo(object.title, object.creationDate, object.isCompleted, object.id);
        superList.addTodo(todo);
    };
}

function displayTodos() {

    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');

    const titleNode = document.createTextNode(superList.title);
    todoListTitle.innerHTML = '';
    todoListTitle.appendChild(titleNode);

    
    todoListUl.innerHTML = '';

    for (let i = 0; i < superList.todoArray.length; i++) {

        const todo = superList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');
        if(todo.isCompleted) {
            newLi.style.backgroundColor = 'darkslateblue';
            newLi.style.color = 'white';
        }

        const titleSpan= document.createElement('span');
        titleSpan.classList.add('todo-title')

        const dateSpan= document.createElement('span');
        dateSpan.classList.add('todo-date');
        if(todo.isCompleted) {
            dateSpan.style.color = 'white';
        }


        const titleNode = document.createTextNode(todo.title);
        const dateNode= document.createTextNode(todo.creationDate);

        const removeBtn = document.createElement('button');
        const textBtn = document.createTextNode('Remove ToDo');

        

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);

        const completeButton = document.createElement('button');
        const completeNode = document.createTextNode('Completed');
        completeButton.appendChild(completeNode);
        completeButton.addEventListener('click', (event) => {
            superList.completeTodo(todo);
            displayTodos();
        });

        const deleteButton = document.createElement('button');
        const deleteNode = document.createTextNode('Delete');
        deleteButton.appendChild(deleteNode);
        deleteButton.addEventListener('click', (event) => {
            superList.removeTodo(todo);
            displayTodos();
        });

        newLi.appendChild(completeButton);
        newLi.appendChild(deleteButton);
        
        todoListUl.appendChild(newLi);

    };

};

function orderByTitle() {
    superList.sortByTitle();
    displayTodos();
};

function orderByCreationDate() {
    superList.sortByCreationDate();
    displayTodos();
}