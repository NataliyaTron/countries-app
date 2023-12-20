import { createSlice } from "@reduxjs/toolkit";

export interface LikesState {
    likes: string[];
}

const initialState: LikesState = {
    likes: [],
};

export const likesSlice = createSlice({
    name: "likeSlice",
    initialState,
    reducers: {
        addCountryToLikedCountries: (state, action) => {
            state.likes.push(action.payload);
        },
        removeCountryFromLikedCountries: (state, action) => {
            state.likes = state.likes.filter(
                (country) => country !== action.payload
            );
        },
    },
});

export const { addCountryToLikedCountries, removeCountryFromLikedCountries } =
    likesSlice.actions;
export default likesSlice.reducer;
