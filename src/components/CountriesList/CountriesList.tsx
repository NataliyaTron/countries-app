import React from "react";
import "./style.scss";
import CountryCard from "../CountryCard/CountryCard";
import { useFetchAllCountriesQuery } from "../../services/CountryService";

interface Country {
    img: string;
    title: string;
    link: string;
}

const CountriesList = () => {
    const { data: countries, error, isLoading } = useFetchAllCountriesQuery(5);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="countries-list">
                {countries.map((country: Country, index: number) => (
                    <CountryCard
                        key={index}
                        img={country.img}
                        title={country.title}
                        link={country.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountriesList;
