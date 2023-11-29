import React, { FC, useEffect, useState } from "react";
import Meta from "antd/es/card/Meta";
import { HeartFilled } from "@ant-design/icons";
import { Card } from "antd";
import "./style.scss";

interface ICountryCardProps {
    img: string;
    title: string;
    link: string;
}

const CountryCard: FC<ICountryCardProps> = ({ img, title, link }) => {
    const [isLiked, setIsLiked] = useState(false);

    // Отработает только при первом рендере
    useEffect(() => {
        const likedCountries = JSON.parse(
            sessionStorage.getItem("likedCountries") || "[]"
        );

        if (Array.isArray(likedCountries) && likedCountries.includes(title)) {
            setIsLiked(true);
        }
    }, []);

    const handleLike = () => {
        const likedCountries = JSON.parse(
            sessionStorage.getItem("likedCountries") || "[]"
        );

        if (!Array.isArray(likedCountries)) return;
        if (likedCountries.includes(title)) {
            setIsLiked(false);
            const newLikedCountries = likedCountries.filter((country) => {
                return country !== title;
            });
            sessionStorage.setItem(
                "likedCountries",
                JSON.stringify(newLikedCountries)
            );
        }

        if (!likedCountries.includes(title)) {
            setIsLiked(true);
            const newLikedCountries = [...likedCountries, title];
            sessionStorage.setItem(
                "likedCountries",
                JSON.stringify(newLikedCountries)
            );
        }
    };

    return (
        <Card
            className={"country-card"}
            hoverable
            key={Math.random()}
            cover={<img alt="example" src={img} />}
        >
            <Meta title={title} description={link} />
            <div className={"country-card__like-wrapper"}>
                <HeartFilled
                    className={
                        isLiked
                            ? "country-card__like-icon liked"
                            : "country-card__like-icon"
                    }
                    onClick={handleLike}
                />
            </div>
        </Card>
    );
};

export default CountryCard;
