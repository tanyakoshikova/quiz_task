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

interface SetUserAction {
    type: UserActionTypes.SET_USER;
    payload?: object;
}

interface LogoutAction {
    type: UserActionTypes.LOGOUT;
}

export type UserAction = SetUserAction | LogoutAction;
