import { getUsers, getQuestions } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';


// Action types
const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA';


// Asynchronous action creators
export const handleGetInitialData = () => {
    return (dispatch) => {
        Promise.all([
            getUsers(),
            getQuestions(),
        ])
        .then(([users, questions]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}
