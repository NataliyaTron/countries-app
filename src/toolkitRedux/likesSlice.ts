import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    },
});

export const { addCountryToLikedCountries } = likesSlice.actions;
export default likesSlice.reducer;
