import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    const username = sessionStorage.getItem("username");
    return (
        <div>
            <Header />
            {/*<Footer />*/}
        </div>
    );
};

export default MainPage;
