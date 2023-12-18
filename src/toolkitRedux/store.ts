import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import likesReducer from "./likesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        likedCountries: likesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
