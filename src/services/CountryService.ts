import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ICountry } from "../components/CountryCard/CountryCard";

interface FetchAllCountriesDefinition {
    input: number;
    output: ICountry[];
}

export const countryAPI = createApi({
    reducerPath: "countryAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1/all",
    }),
    endpoints: (build) => ({
        fetchAllCountries: build.query<FetchAllCountriesDefinition, number>({
            query: (limit: number = 5) => ({
                url: "/all",
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useFetchAllCountriesQuery } = countryAPI;
