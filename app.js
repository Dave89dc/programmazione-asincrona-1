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
};

// VERSIONE 1:

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
        const dateNode= document.createTextNode(todo.dateAndHour);

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-button');
        const completeNode = document.createTextNode('Completed');
        completeButton.appendChild(completeNode);
        completeButton.addEventListener('click', (event) => {
            superList.completeTodo(todo);
            DataService.putTodo(todo).than(updatedTodo => {
                displayTodos();
            });
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        const deleteNode = document.createTextNode('Delete');
        deleteButton.appendChild(deleteNode);
        deleteButton.addEventListener('click', (event) => {
            DataService.deleteTodo(todo).then(removedTodo => {
                superList.removeTodo(todo);
                displayTodos();
            });
        });

        newLi.appendChild(completeButton);
        newLi.appendChild(deleteButton);
        
        todoListUl.appendChild(newLi);

    };

};


// VERSIONE 2:


// function displayTodos() {
//     const todoListTitle = document.getElementById('list-name');
//     const todoListUl = document.getElementById('todo-list');
//     todoListTitle.innerHTML = superList.title;
//     todoListUl.innerHTML = '';
//     for(let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         if(todo.isCompleted) {
//             todoListUl.innerHTML += `<li class='todo-li-true'><span id='todo-title'>${todo.title}</span><span id='todo-date-true'>${todo.dateAndHour}</span><button id="complete-btn${i}" class="complete-button-true">Complete</button><button id="delete-btn${i}" class="delete-button-true">Delete</button></li>`;
//         } else {
//             todoListUl.innerHTML += `<li class='todo-li'><span id='todo-title'>${todo.title}</span><span id='todo-date'>${todo.dateAndHour}</span><button id="complete-btn${i}" class="complete-button">Complete</button><button id="delete-btn${i}" class="delete-button">Delete</button></li>`;
//         }
//     };
//     for(let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         const completeBtn = document.getElementById("complete-btn" + i);
//             completeBtn.addEventListener('click', (event) => {
//             superList.completeTodo(todo);
//             displayTodos();
//         });
//         const deleteBtn = document.getElementById("delete-btn" + i);
//             deleteBtn.addEventListener('click', (event) => {
//             superList.removeTodo(todo);
//             displayTodos();
//         });
//     };
// };


// VERSIONE 3:


// function displayTodos() {
//     createListForTodo();
//     functionForCompleteButton();
//     functionForDeleteButton();
// };

// function createListForTodo() {
//     const todoListTitle = document.getElementById('list-name');
//     const todoListUl = document.getElementById('todo-list');
//     todoListTitle.innerHTML = superList.title;
//     todoListUl.innerHTML = '';
//     for(let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         if(todo.isCompleted) {
//             todoListUl.innerHTML += `<li class='todo-li-true'><span id='todo-title'>${todo.title}</span><span id='todo-date-true'>${todo.dateAndHour}</span><button id="complete-btn${i}" class="complete-button-true">Complete</button><button id="delete-btn${i}" class="delete-button-true">Delete</button></li>`;
//         } else {
//             todoListUl.innerHTML += `<li class='todo-li'><span id='todo-title'>${todo.title}</span><span id='todo-date'>${todo.dateAndHour}</span><button id="complete-btn${i}" class="complete-button">Complete</button><button id="delete-btn${i}" class="delete-button">Delete</button></li>`;
//         }
//     };
// };

// function functionForCompleteButton() {
//     for(let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         const completeBtn = document.getElementById("complete-btn" + i);
//             completeBtn.addEventListener('click', (event) => {
//             superList.completeTodo(todo);    
//             displayTodos();
//         });
//     };
// };

// function functionForDeleteButton() {
//     for(let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         const deleteBtn = document.getElementById("delete-btn" + i);
//             deleteBtn.addEventListener('click', (event) => {
//             superList.removeTodo(todo);
//             displayTodos();
//         });
//     };
// };

function orderByTitle() {
    superList.sortByTitle();
    displayTodos();
};

function orderByCreationDate() {
    superList.sortByCreationDate();
    displayTodos();
};