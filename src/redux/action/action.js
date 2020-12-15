export const ADD_TODO = 'ADD_TODO'
export const DONE_TODO = 'DONE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (msg) => {
    return {
        type: ADD_TODO,
        message: msg
    }
}

export const doneTodo = (done) => {
    return {
        type: DONE_TODO,
        done: done
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        deleteIndex: index
    }
}
