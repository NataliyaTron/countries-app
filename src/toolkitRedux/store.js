import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Импортируйте корневой редьюсер

const store = configureStore({
    reducer: rootReducer,
});

export default store;
