import React, {useState} from 'react';
import { Header } from 'antd/es/layout/layout';
import { Outlet, useNavigate } from 'react-router-dom';
import {Button, CountdownProps} from 'antd';
import { useDispatch } from 'react-redux';
import { logout} from "userReducer/userReducer";
import "../../App.scss"

const Layout: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div>
            <Header className="header">
                <h1 className="quiz">Quiz</h1>
                <Button style={{ width: '90px', height: '30px' }}  onClick={handleLogout}>
                    Выход
                </Button>
            </Header>
            <Outlet />
        </div>
    );
};

export default Layout;
