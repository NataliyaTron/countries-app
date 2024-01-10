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
    flag: string;
    name: string;
    population: number;
    area: number;
    currencies: string;
    capital: string;
}

export interface ICountry {
    id: number;
}

const CountryCard: FC<ICountryCardProps> = ({
    flag,
    name,
    population,
    area,
    currencies,
    capital,
}) => {
    const dispatch = useDispatch();

    const likedCountries = useSelector(
        (state: RootState) => state.likedCountries.likes
    );
    const isLiked = likedCountries.includes(name);
    const handleLike = () => {
        if (isLiked) {
            dispatch(removeCountryFromLikedCountries(name));
        } else {
            dispatch(addCountryToLikedCountries(name));
        }
    };

    return (
        <Card
            className={"country-card"}
            hoverable
            key={Math.random()}
            cover={<img alt={`Flag of ${name}`} src={flag} />}
        >
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <p>Area: {area} sq. km</p>
            <p>Currencies: {currencies}</p>
            <p>Capital: {capital}</p>
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
