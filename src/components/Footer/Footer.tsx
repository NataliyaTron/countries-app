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
                                src="https://avatars.mds.yandex.net/i?id=e4f85eb57f6ab5ce6b4ed96cd1b25e8a_sr-4866546-images-thumbs&n=13"
                                alt="Телеграм"
                            />
                        </li>
                        <li className="footer__social-item">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=6a5ff94911fa733b7cf7922fbb4d1510_sr-9865355-images-thumbs&n=13"
                                alt="Вконтакте"
                            />
                        </li>
                        <li className="footer__social-item">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=49c33c909b94fc99572662d81a4753fd_sr-8485393-images-thumbs&n=13"
                                alt="Вайбер"
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
