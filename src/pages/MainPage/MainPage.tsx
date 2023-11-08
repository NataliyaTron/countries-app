import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CountriesList from "../../components/CountriesList/CountriesList";

const MainPage = () => {
    const username = sessionStorage.getItem("username");
    // Test review
    return (
        <div>
            <div className="wrapper">
                <Header />
                <CountriesList />
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
