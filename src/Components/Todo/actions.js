import { SET_JOB, ADD_JOB } from "./constants";

const setJob = (payload) => {
    return {
        payload,
        type: SET_JOB
    }
}

const addJob = (payload) => {
    return {
        payload,
        type: ADD_JOB
    }
}

export { setJob, addJob }