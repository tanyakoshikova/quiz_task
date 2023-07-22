import {UserActionTypes, CurrentUserState, UserState, UserAction} from "userReducer/userTypes";
import {SET_USER, LOGOUT} from "userReducer/utils";

const defaultState: UserState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action: UserAction) {
    switch (action.type) {
    case UserActionTypes.SET_USER:
        return {
            ...state,
            currentUser: action.payload,
            isAuth: true
        }
    case UserActionTypes.LOGOUT:
        localStorage.removeItem('token')
        return {
            ...state,
            ...defaultState,
        }
    default:
        return state
    }
}


export const setUser = (user: CurrentUserState) => {
    return {type: SET_USER, payload: user}
}
export const logout = () => {
    return {type: LOGOUT}
}