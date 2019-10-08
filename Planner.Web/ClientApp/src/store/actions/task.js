import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchTasksStart = () => {
    return {
        type: actionTypes.FETCH_TASKS_START
    };
};

export const fetchTasksSuccess = (tasks) => {
    return {
        type: actionTypes.FETCH_TASKS_SUCCESS,
        tasks: tasks
    }
}

export const fetchTasksFail = (error) => {
    return {
        type: actionTypes.FETCH_TASKS_FAIL,
        error: error
    }
};

export const fetchTasks = () => {
    return dispatch => {
         dispatch(fetchTasksStart());
        axios.get('/tasks')
            .then(response => {
                dispatch(fetchTasksSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchTasksFail(error))
            })
    };
};