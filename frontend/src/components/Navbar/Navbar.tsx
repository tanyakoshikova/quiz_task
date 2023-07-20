import React, { FC } from 'react';
import {Header} from 'antd/es/layout/layout';
import {useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logout} from "userReducer/userReducer";
import {RootState} from "redux/store";
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Navbar : FC = () => {
    const { isAuth } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div>
            <Header className="header">
                {/*{isAuth && (*/}
                    <Button color={"primary"} type="link"  onClick={handleLogout}>
                        Выход
                    </Button>
                {/*)}*/}
            </Header>
        </div>
    );
};
export default Navbar;
