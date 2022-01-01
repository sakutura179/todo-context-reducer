import { SET_JOB, ADD_JOB, EDIT_JOB, DELETE_JOB } from "./constants";

const initState = {
    todos: [],
    todoInput: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                todoInput: action.inputTodo
            };
        case ADD_JOB:
            return {
                ...state,
                todos: [...state.todos, action.inputTodo]
            };
        case EDIT_JOB:
            let editTodos = [...state.todos];
            editTodos.splice(action.index, 1, action.editTodo);
            return {
                ...state,
                todos: editTodos
            };
        case DELETE_JOB:
            let newTodos = [...state.todos];
            newTodos.splice(action.index, 1);
            return {
                ...state,
                todos: newTodos
            };
        default:
            throw new Error('Invalid Action');
    }
    
}

export { initState }
export default reducer