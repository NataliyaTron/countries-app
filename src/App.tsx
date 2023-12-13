import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./toolkitRedux/store";
import { AppRouter } from "./AppRouter";
import "./normalize.scss";

const App = () => {
    return <AppRouter />;
};

export default App;
