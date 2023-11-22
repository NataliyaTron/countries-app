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

    useEffect(() => {
        // Проверка, была ли страна добавлена в избранное
        const likedCountries = JSON.parse(
            sessionStorage.getItem("likedCountries") || "[]"
        );
        if (likedCountries.includes(title)) {
            setIsLiked(true);
        }
    }, [title]);

    const handleLike = () => {
        // Получить массив избранных стран из сессионного хранилища
        const likedCountries = JSON.parse(
            sessionStorage.getItem("likedCountries") || "[]"
        );

        // Добавить или удалить страну из массива в зависимости от статуса "нравится"
        if (isLiked) {
            const updatedLikedCountries = likedCountries.filter(
                (country: string) => country !== title
            );
            sessionStorage.setItem(
                "likedCountries",
                JSON.stringify(updatedLikedCountries)
            );
        } else {
            const updatedLikedCountries = [...likedCountries, title];
            sessionStorage.setItem(
                "likedCountries",
                JSON.stringify(updatedLikedCountries)
            );
        }

        // Обновить статус "нравится" в компоненте
        setIsLiked(!isLiked);
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
