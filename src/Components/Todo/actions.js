import { SET_JOB, ADD_JOB, EDIT_JOB, DELETE_JOB } from "./constants";

const setJob = (inputTodo) => {
    return {
        inputTodo,
        type: SET_JOB
    }
}

const addJob = (inputTodo) => {
    return {
        inputTodo,
        type: ADD_JOB
    }
}

const editJob = (index, editTodo) => {
    return {
        index,
        editTodo,
        type: EDIT_JOB
    }
}

const deleteJob = (index) => {
    return {
        index,
        type: DELETE_JOB
    }
}

export { setJob, addJob, editJob, deleteJob }