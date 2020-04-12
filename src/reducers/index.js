import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';


// Export the combined reducers
export default combineReducers({
    authedUser,
    users,
    questions,
})
