import React from 'react';
import './App.scss';
import { Route, Routes, Navigate} from "react-router-dom";
import Main from "pages/Main/Main/Main";
import {useSelector} from "react-redux";
import {IRootState, useAppDispatch} from "store";
import {useEffect} from "react";
import {getProfile} from "store/auth/actionCreators";
import Questions from "components/Questions";

const App = () => {



    const isLoggedIn = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route
                    path="/dashboard"
                    element={isLoggedIn ? <Questions /> : <Navigate to="/" />}
                />
            </Routes>
        </>


    );
}

export default App;