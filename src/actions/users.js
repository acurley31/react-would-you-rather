import { getUsers } from '../utils/api';


// Action types
const RECEIVE_USERS = 'RECEIVE_USERS'


// Synchronous action creators
export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users,
})


// Asynchronous action creators
export const handleGetUsers = () => {
    return (dispatch) => {
        return api.getUsers()
            .then((users) => dispatch(receiveUsers(users)))
    }
}



