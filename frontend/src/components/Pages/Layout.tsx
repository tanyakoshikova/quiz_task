import React from 'react';
import { Header } from 'antd/es/layout/layout';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useTypedSelector} from "components/Navbar/Navbar";
import { useDispatch } from 'react-redux';
import { logout} from "userReducer/userReducer";
import "../../App.scss"

const Layout: React.FC = () => {
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
                {isAuth && (
                    <Button type="link" onClick={handleLogout}>
                        Выход
                    </Button>
                )}
            </Header>
            <Outlet />
        </div>
    );
};

export default Layout;
