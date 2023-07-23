import {SET_USER, LOGOUT} from "userReducer/utils";

export type CurrentUserState = {
    id: string;
    email: string;
};

export interface UserState {
    currentUser: CurrentUserState | object;
    isAuth: boolean;
}

interface SetUserAction {
    type: typeof SET_USER;
    payload?: object;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

export type UserAction = SetUserAction | LogoutAction;
