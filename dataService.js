class DataService {

    // static getTodos(callback) {
    //     fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/todo-list')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/todo-list')
            .then(resp => resp.json());
    };


    // static postTodo(todo){

    // }

    static putTodo(todo){
        const jsonTodo = JSON.stringify(todo.toDbModel());
        return fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/todo-list/' + todo.id, {method: 'PUT', body: jsonTodo, headers: {'content-type':'application/json'}})
            .then(resp => resp.json());
    };

    static deleteTodo(todo){
        return fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/todo-list/' + todo.id, {method: 'DELETE'})
            .then(resp => resp.json());
    };

};

// GET => Lettura dei dati
// POST => Scrittura dei dati
// PUT => Modifica dei dati
// DELETE => Cancellazione dei dati