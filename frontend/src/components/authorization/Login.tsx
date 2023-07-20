import React, {useState} from 'react';
import {login} from "actions/user";
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";



type LoginProps = {
    showRegForm: () => void;
};

const Login: React.FC<LoginProps> = ({ showRegForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const handleClick = () => {
        login(email, password);
    };

    const handleShowForm = () => {
        showRegForm();
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            autoComplete="off">
            <Form.Item label="E-mail" name="email"
                rules={[{ required: true, message: 'Пожалуйста введите ваш e-mail!' }]}>
                <Input value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Item>

            <Form.Item label="Password"  name="password"
                rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}>
                <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Item>

            <Form.Item>
                <div style={{ display: 'flex' }}>
                    <Button type="link" onClick={handleShowForm}>
                        Зарегистрироваться
                    </Button>
                    <Button type="primary" htmlType="submit" onClick={handleClick}>
                        <Link to="/quiz">Войти</Link>
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
};


export default Login;