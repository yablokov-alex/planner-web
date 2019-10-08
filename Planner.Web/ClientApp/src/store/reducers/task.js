import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { Tasks } from '../../shared/tasks';
import { taskType } from '../../shared/taskType';

const initialState = {
    inbox: {
        count: 0,
        tasks: []
    },
    delegated: {
        count: 0,
        tasks: []
    },
    day: {
        count: 0,
        tasks: []
    },
    week: {
        count: 0,
        tasks: [],
        //commitment
    },
    month: {
        count: 0,
        tasks: [],
        //book
    },
    loading: false
};

const fetchTasksSuccess = (state, action) => {
    return updateObject(state, {
        inbox: new Tasks(taskType.INBOX, action.tasks),
        delegated: new Tasks(taskType.DELEGATED, action.tasks),
        day: new Tasks(taskType.DAY, action.tasks),
        week: new Tasks(taskType.WEEK, action.tasks),
        month: new Tasks(taskType.MONTH, action.tasks),
        loading: false
    })
};

const fetchTasksFail = (state, action) => {
    return updateObject(state, { loading: false });
}

const fetchTasksStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const updateTaskStart = (state, action) => {
    return updateObject(state, {
        
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASKS_START: return fetchTasksStart(state, action);
        case actionTypes.FETCH_TASKS_SUCCESS: return fetchTasksSuccess(state, action);
        case actionTypes.FETCH_TASKS_FAIL: return fetchTasksFail(state, action);
        case actionTypes.UPDATE_TASK_START: return updateTaskStart(state, action);
        default: return state;
    }
}

export default reducer;