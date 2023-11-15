import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainLayout from "./layouts/MainLayout";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { routes } from "./consts/routes";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: `/${routes.AUTH}`,
            element: <AuthPage />,
        },
        {
            path: routes.MAIN,
            element: (
                <ProtectedPage>
                    <MainLayout />
                </ProtectedPage>
            ),
            children: [
                {
                    path: routes.FAVOURITE,
                    element: <FavouritesPage />,
                },
                {
                    index: true,
                    element: <MainPage />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export { AppRouter };
