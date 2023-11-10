import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainLayout from "./layouts/MainLayout";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/auth",
            element: <AuthPage />,
        },
        {
            path: "/",
            element: (
                <ProtectedPage>
                    <MainLayout />
                </ProtectedPage>
            ),
            children: [
                {
                    path: "favourites",
                    element: <FavouritesPage />,
                },
                {
                    index: true,
                    element: <MainPage />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export { AppRouter };
