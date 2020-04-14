// Action types
export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT = 'LOGOUT';


// Synchronous action creators
export const setAuthedUser = (id) => ({
    type: SET_AUTHED_USER,
    id,
})

export const logout = () => ({
    type: LOGOUT,
})

