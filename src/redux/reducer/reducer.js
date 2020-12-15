import { ADD_TODO, DELETE_TODO, DONE_TODO } from "../action/action";

const initialTodo = {
    message: 'None'
}

const todoReducer = (state = initialTodo, action) => {
    switch (action.type) {
        case ADD_TODO: return {
            ...state, message: action.message
        }
        case DELETE_TODO: return {
            ...state, message: action.message
        }
        case DONE_TODO: return {
            ...state, message: action.message
        }
        default: return state
    }
}

export default todoReducer;