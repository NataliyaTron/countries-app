import React, { ChangeEvent, useState } from "react";
import "./style.scss";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

const accessUser = {
    login: "Natasha",
    password: "qwerty123",
};
const AuthPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLogin(value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handleLoginButtonClick = () => {
        if (login === accessUser.login && password === accessUser.password) {
            console.log("Успешно!");
            navigate("/");
            sessionStorage.setItem("username", login);
        } else {
            setErrorMessage("Неверный пользователь или пароль");
        }
    };

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
