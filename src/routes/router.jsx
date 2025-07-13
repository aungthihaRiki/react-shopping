import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
        {
        path: "about-us",
        element: <AboutUs />,
    },
    {
        path: "product-detail",
        element: <ProductDetail />,
    },
        {
        path: "my-cart",
        element: <MyCart />,
    },
]);

export default route;