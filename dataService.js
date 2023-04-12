class DataService {

    // static getTodos(callback) {
    //     fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/todo-list')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/todo-list')
            .then(resp => resp.json())
    }


    // static postTodo(todo){

    // }

    // static putTodo(todo){

    // }

    // static deleteTodo(todo){

    // }


}