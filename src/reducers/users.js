import { RECEIVE_USERS } from '../actions/users';

// Users reducer
const users = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_USERS:
            const { users } = action
            return {
                ...state,
                users,
            }

        default:
            return state
    }
}

export default users;
