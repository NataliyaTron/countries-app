import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";

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
        <div className="countries-list">
            {countries.map((item) => (
                <Card
                    hoverable
                    style={{ width: 240 }}
                    key={Math.random()}
                    cover={<img alt="example" src={item.img} />}
                >
                    <Meta title={item.title} description={item.link} />
                </Card>
            ))}
        </div>
    );
};

export default CountriesList;
