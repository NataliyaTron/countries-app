import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import likesReducer from "./likeSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        likes: likesReducer,
    },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
