import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import likesReducer from "./likesSlice";
import { countryAPI } from "../services/CountryService";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        likedCountries: likesReducer,
        [countryAPI.reducerPath]: countryAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
