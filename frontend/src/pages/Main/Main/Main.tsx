import React from "react";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch} from "store";
import { getProfile, logoutUser} from "store/auth/actionCreators";
import Login from "pages/Main/Main/Login";
import Questions from "components/Questions";


const Main = () => {
    const dispatch = useAppDispatch();

    const profile = useSelector(
        (state: IRootState) => state.auth.profileData.profile
    );
    const isLoggedIn = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken
    );

    const renderProfile = () => (
        <div>
            <div>Добро пожаловать на квиз, {profile}</div>
            <div className="app">
                <Questions/>
            </div>
            <button onClick={() => dispatch(logoutUser())}>Logout</button>
            <button onClick={() => dispatch(getProfile())}>update profile</button>
        </div>
    );

    return (
        <div>
            <h1>Main</h1>
            {isLoggedIn ? renderProfile() : <Login />}
        </div>
    );
};

export default Main;
