import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router";

interface IProtectedPageProps extends PropsWithChildren {}
const ProtectedPage: FC<IProtectedPageProps> = ({ children }) => {
    const username = sessionStorage.getItem("username");
    return username ? <div>{children}</div> : <Navigate to={"/auth"} />;
};

export default ProtectedPage;
