import { ADD_TODO, DELETE_TODO, DONE_TODO } from "../action/action";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { message: action.message, done: false }]

        case DONE_TODO: {
            state.map((todo, i) => {
                if (i === action.doneIndex)
                    return todo.done = action.done;
            })
            return [...state]
        }

        case DELETE_TODO: {
            const deleteTodo = state.filter((todo, i) => {
                return i !== action.deleteIndex
            })
            return [...deleteTodo]
        }
        default: return state
    }
}

export default todoReducer;