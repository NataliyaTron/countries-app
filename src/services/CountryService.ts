import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../components/CountryCard/CountryCard";

interface FetchAllCountriesDefinition {
    input: number;
    output: ICountry[];
}

export const countryAPI = createApi({
    reducerPath: "countryAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1",
    }),
    endpoints: (build) => ({
        fetchAllCountries: build.query<any, undefined | void>({
            query: () => ({
                url: "/all",
            }),
        }),
    }),
});

export const { useFetchAllCountriesQuery } = countryAPI;
