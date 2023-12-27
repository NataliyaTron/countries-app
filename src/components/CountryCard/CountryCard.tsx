import React, { FC } from "react";
import Meta from "antd/es/card/Meta";
import { HeartFilled } from "@ant-design/icons";
import { Card } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../toolkitRedux/store";
import {
    addCountryToLikedCountries,
    removeCountryFromLikedCountries,
} from "../../toolkitRedux/likesSlice";

export interface ICountryCardProps {
    img: string;
    title: string;
    link: string;
}

export interface ICountry {
    id: number;
}

const CountryCard: FC<ICountryCardProps> = ({ img, title, link }) => {
    const dispatch = useDispatch();

    const likedCountries = useSelector(
        (state: RootState) => state.likedCountries.likes
    );
    const isLiked = likedCountries.includes(title);
    const handleLike = () => {
        if (isLiked) {
            dispatch(removeCountryFromLikedCountries(title));
        } else {
            dispatch(addCountryToLikedCountries(title));
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
                    className={isLiked ? "country-card__like-icon" : ""}
                    onClick={handleLike}
                />
            </div>
        </Card>
    );
};

export default CountryCard;
