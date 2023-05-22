import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Layouts/404/404";
import AboutPage from "../Layouts/About/About";
import CategoriesPage from "../Layouts/Categories/Categories";
import HomePage from "../Layouts/Home/Home";
import ProductsPage from "../Layouts/Products/Products";
import StocksPage from "../Layouts/Stocks/Stocks";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFound />
    },
    {
        path: '/categories',
        element: <CategoriesPage />
    },
    {
        path: '/products',
        element: <ProductsPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/stocks',
        element: <StocksPage />
    },
])