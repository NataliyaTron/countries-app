import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CountriesList from "../../components/CountriesList/CountriesList";
import MainLayout from "../../layouts/MainLayout";

const MainPage = () => {
    const username = sessionStorage.getItem("username");
    // Test review
    return (
        <div>
            <CountriesList />
        </div>
    );
};

export default MainPage;
