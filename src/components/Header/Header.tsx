import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../consts/routes";
const Header = () => {
    const username = sessionStorage.getItem("username");
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("username");
        navigate("/auth");
    };
    const links = [
        { href: routes.MAIN, title: "Главная" },
        { href: routes.FAVOURITE, title: "Избранное" },
    ];

    return (
        <div className={"header"}>
            <div className="header__inner container">
                <div className="header__logo">
                    <img
                        src="https://www.robotsscience.com/wp-content/uploads/2023/01/Photomath-Logo-scaled.jpg"
                        alt="логотип"
                    />
                </div>
                <div className="header__actions">
                    <ul className="header__navigation">
                        {links.map((link) => (
                            <li key={Math.random()}>
                                <NavLink to={link.href}>{link.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="header__info">
                        <UserOutlined />
                        Ваш логин - {username}
                    </div>
                    <div className="header__exit">
                        <Button type="primary" danger onClick={handleLogout}>
                            Выход
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
