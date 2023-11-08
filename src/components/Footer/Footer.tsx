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
                                src="https://w7.pngwing.com/pngs/1023/525/png-transparent-viber-icon-test-apk-whatsapp-android-whatsapp-logo-purple-violet-logo.png"
                                alt="Вайбер"
                            />
                        </li>

                        <li className="footer__social-item">
                            <img
                                src="https://shar23.ru/wp-content/uploads/2022/12/%D0%92%D0%9A.png"
                                alt="Вконтакте"
                            />
                        </li>
                        <li className="footer__social-item">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=e4f85eb57f6ab5ce6b4ed96cd1b25e8a_sr-4866546-images-thumbs&n=13"
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
