import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/auth",
            element: <AuthPage />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export { AppRouter };
