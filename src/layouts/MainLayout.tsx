import React, { FC, PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import "./style.scss";

interface IMainLayoutProps extends PropsWithChildren {}
const MainLayout: FC<IMainLayoutProps> = () => {
    return (
        <div className={"wrapper"}>
            <Header />
            <div className={"container"}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
