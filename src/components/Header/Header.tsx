import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const username = sessionStorage.getItem("username");
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("username");
        navigate("/auth");
    };

    return (
        <div className={"header"}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img
                            src="https://www.robotsscience.com/wp-content/uploads/2023/01/Photomath-Logo-scaled.jpg"
                            alt="логотип"
                        />
                    </div>
                    <div className="header__actions">
                        <div className="header__info">
                            <UserOutlined />
                            Ваш логин - {username}
                        </div>
                        <div className="header__exit">
                            <Button
                                type="primary"
                                danger
                                onClick={handleLogout}
                            >
                                Выход
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
