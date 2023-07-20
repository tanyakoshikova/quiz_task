import React, { useState } from 'react';
import ModalForm from "components/Modal/ModalForm";
import Login from "components/authorization/Login";
import Registration from "components/Registration/Registration";

export function Home () {

    const [RegistrationForm, setRegistrationForm] = useState(false);

    const handleShowForm = () => {
        setRegistrationForm(true);
    };

    const handleHideForm = () => {
        setRegistrationForm(false);
    };

    return (
        <div>
            {RegistrationForm ? (
                <ModalForm title={"Регистрация"} onHide={handleHideForm}>
                    <Registration handleHideReg={handleHideForm}/>
                </ModalForm>
            ) : (
                <ModalForm title={"Авторизация"}>
                    <Login showRegForm={handleShowForm}/>
                </ModalForm>
            )}
        </div>
    );
}
