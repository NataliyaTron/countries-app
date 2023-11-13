import React from "react";
import "./style.scss";

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__contacts">+7 (495) 500-55-50</div>
                    <ul className="footer__social-list">
                        <li className="footer__social-item">
                            <img
                                src="https://www.svgrepo.com/show/475689/twitter-color.svg"
                                alt="Твиттер"
                            />
                        </li>

                        <li className="footer__social-item">
                            <img
                                src="https://www.svgrepo.com/show/349554/vk.svg"
                                alt="Вконтакте"
                            />
                        </li>
                        <li className="footer__social-item">
                            <img
                                src="https://www.svgrepo.com/show/452115/telegram.svg"
                                alt="Телеграм"
                            />
                        </li>
                    </ul>
                    <div className="footer__address">
                        Россия, Москва, 117997, ул. Вавилова, д. 19
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
