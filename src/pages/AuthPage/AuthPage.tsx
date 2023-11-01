import React, { ChangeEvent, useState } from "react";
import "./style.scss";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

const accessUser = {
    login: "Natasha",
    password: "qwerty123",
};
const AuthPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLogin(value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handleLoginButtonClick = (event: any) => {
        if (login === accessUser.login && password === accessUser.password) {
            console.log("Успешно!");
            setLoggedIn(true);
        } else {
            setErrorMessage("Неверный пользователь или пароль");
        }
    };

    if (isLoggedIn) {
        return <MainPage />;
    }

    return (
        <div className={"auth"}>
            <div className="auth__inner">
                <p className="auth__title">Вход</p>
                <div className="auth__controls">
                    <Input
                        placeholder="Логин"
                        value={login}
                        onChange={handleChangeLogin}
                    />
                    <Input.Password
                        placeholder="Пароль"
                        value={password}
                        onChange={handleChangePassword}
                    />
                </div>
                <Button
                    className={"auth__submit"}
                    type="primary"
                    onClick={handleLoginButtonClick}
                >
                    Вход
                </Button>
                {errorMessage && (
                    <div
                        style={{
                            color: "red",
                            fontSize: "14px",
                            marginTop: "10px",
                        }}
                    >
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthPage;
