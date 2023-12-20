import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../toolkitRedux/store";

const FavouritesPage = () => {
    const likedCountries = useSelector(
        (state: RootState) => state.likedCountries.likes
    );

    return (
        <div>
            <h2>Избранное</h2>
            <ul>
                {likedCountries.map((country) => {
                    return <li key={Math.random()}>{country}</li>;
                })}
            </ul>
        </div>
    );
};

export default FavouritesPage;
