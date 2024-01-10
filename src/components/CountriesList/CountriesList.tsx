import React from "react";
import "./style.scss";
import CountryCard from "../CountryCard/CountryCard";
import { useFetchAllCountriesQuery } from "../../services/CountryService";

interface Country {
    flag: string;
    name: string;
    population: number;
    area: number;
    currencies: string;
    capital: string;
}

const CountriesList = () => {
    const {
        data: countries = [],
        error,
        isLoading,
    } = useFetchAllCountriesQuery();
    console.log(countries.map((country: any) => country.name.common));
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error, null, 2)}</div>;
    }

    return (
        <div>
            <div className="countries-list">
                {countries.map((country: Country, index: number) => (
                    <CountryCard
                        key={index}
                        flag={country.flag}
                        name={country.name}
                        population={country.population}
                        area={country.area}
                        currencies={country.currencies}
                        capital={country.capital}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountriesList;
