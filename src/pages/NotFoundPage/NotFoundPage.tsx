import React from "react";
import "./style.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleToMainPage = () => {
        navigate("/");
    };
    return (
        <div className="notfound">
            <p className="notfound__text">
                <p className="notfound__error">404</p>К сожалению, страница не
                найдена
            </p>
            <Button
                type="primary"
                className="notfound__button"
                onClick={handleToMainPage}
            >
                На главную
            </Button>
        </div>
    );
};

export default NotFoundPage;
