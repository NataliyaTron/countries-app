import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../toolkitRedux/store";
import { Input } from "antd";

const FavouritesPage = () => {
    const [input, setInput] = useState("");
    const likedCountries = useSelector(
        (state: RootState) => state.likedCountries.likes
    );
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);
    };

    const filteredCountries = likedCountries.filter((country) =>
        country.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div>
            <h2>Избранное</h2>
            <Input
                placeholder="Введите название страны"
                onChange={handleChange}
            />
            <ul>
                {filteredCountries.map((country) => {
                    return <li key={country}>{country}</li>;
                })}
            </ul>
        </div>
    );
};

export default FavouritesPage;
