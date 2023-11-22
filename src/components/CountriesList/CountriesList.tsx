import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import { HeartFilled } from "@ant-design/icons";
import CountryCard from "../CountryCard/CountryCard";

const CountriesList = () => {
    const countries = [
        {
            img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            title: "Russia",
            link: "www.instagram.com",
        },
        {
            img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            title: "USA",
            link: "www.facebook.com",
        },
        {
            img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            title: "China",
            link: "www.youtube.com",
        },
    ];
    return (
        <div>
            <div className="countries-list">
                {countries.map((item, index) => (
                    <CountryCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountriesList;
