const defaultState: UserState = {
    currentUser: {},
    isAuth: false
}

export type CurrentUserState = {
    id: string;
    email: string;
};

export interface UserState {
    currentUser: CurrentUserState | object;
    isAuth: boolean;
}

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    LOGOUT = 'LOGOUT',
}

export interface SetUserAction {
    type: UserActionTypes.SET_USER;
    payload?: object;
}

interface LogoutAction {
    type: UserActionTypes.LOGOUT;
}

export type UserAction = SetUserAction | LogoutAction;


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
            currentUser: {},
            isAuth: false
        }
    default:
        return state
    }
}


export const setUser = (user: CurrentUserState) => {
    return {type: 'SET_USER', payload: user}
}
export const logout = () => {
    return {type: 'LOGOUT'}
}