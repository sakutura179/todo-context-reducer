import { SET_JOB, ADD_JOB } from "./constants";

const initState = {
    todos: [],
    todoInput: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                todoInput: action.payload
            };
        case ADD_JOB:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default:
            throw new Error('Invalid Action');
    }
    
}

export { initState }
export default reducer