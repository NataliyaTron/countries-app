import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: "likes",
    initialState: {
        count: 0,
    },
    reducers: {
        incrementLikes: (state) => {
            state.count += 1;
        },
        decrementLikes: (state) => {
            state.count -= 1;
        },
    },
});

export const { incrementLikes, decrementLikes } = likeSlice.actions;
export default likeSlice.reducer;
