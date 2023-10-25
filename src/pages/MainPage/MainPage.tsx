import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            MainPage
            <br />
            <Link to={"/auth"}>Link to auth page</Link>
        </div>
    );
};

export default MainPage;
