import { getUsers, getQuestions } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar'


// Action types
export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA';


// Asynchronous action creators
export const handleGetInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        Promise.all([
            getUsers(),
            getQuestions(),
        ])
        .then(([users, questions]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}
