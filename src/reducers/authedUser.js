import { 
    SET_AUTHED_USER,
    LOGOUT,
} from '../actions/authedUser';


// AuthedUser reducer
const authedUser = (state = null, action) => {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.id

        case LOGOUT:
            return null

        default:
            return state
    }
}

export default authedUser
