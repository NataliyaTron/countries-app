import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainLayout from "./layouts/MainLayout";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import { routes } from "./consts/routes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DateTimePage from "./pages/DateTimePage/DateTimePage";

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
                { path: routes.TIME, element: <DateTimePage /> },
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
