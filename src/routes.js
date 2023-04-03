import React from "react";
import {useRoutes, Navigate} from "react-router-dom";
import {
    Home,
    Login,
    Signup,
    FAQPage,
    Saved,
    Categories,
    Cart,
    SearchResults,
    VerifyCode,
    ResetPassword,
    NotFoundPage
} from "./pages";
import {ChangePassword, ChangePhoneNumber, MyInfos, MyOrders, Settings} from "./pages/profile";
import {ProductDetails} from "./components";
import NewPassword from "./pages/new-password";

export const Routes = () => {
    const token = localStorage.getItem("access");
    const isAuthorized = React.useMemo(() => Boolean(token), [token]);
    const PrivateRoute = [
        {
            children: [
                {path: "/", element: <Home/>},
                {path: "/user", element: <Navigate to={"/user/info"}/>},
                {path: "/profile", element: <Navigate to={"/user/info"}/>},
                {path: "/user/my-orders", element: <MyOrders/>},
                {path: "/user/info", element: <MyInfos/>},
                {path: "/user/settings", element: <Settings/>},
                {path: "/user/change-password", element: <ChangePassword/>},
                {path: "/user/change-phone-number", element: <ChangePhoneNumber/>},
                {path: "/wishlist", element: <Saved/>},
                {path: "/search", element: <SearchResults searchParams={new URLSearchParams(window.location.search).get("query")}/>},
                {path: "/categories/:categoryName", element: <Categories/>},
                {path: "categories/:category/:productId", element: <ProductDetails/>},
                {path: "/cart", element: <Cart/>},
                {path: "/faq", element: <FAQPage/>},
                {path: "/*", element: <NotFoundPage/>},
            ],
        },
    ];
    const PublicRoutes = [
        {
            children: [
                {path: "/", element: <Home/>},
                {path: "/login", element: <Login/>},
                {path: "/signup", element: <Signup/>},
                {path: "/verify-phone-number", element: <VerifyCode/>},
                {path: "/reset-password", element: <ResetPassword/>},
                {path: "/new-password", element: <NewPassword/>},
                {path: "/user/my-orders", element: <Navigate to="/login"/>},
                {path: "/wishlist", element: <Navigate to="/login" />},
                {path: "/search", element: <SearchResults searchParams={new URLSearchParams(window.location.search).get("query")}/>},
                {path: "/categories/:categoryName", element: <Categories/>},
                {path: "categories/:category/:productId", element: <ProductDetails/>},
                {path: "/cart", element: <Cart/>},
                {path: "/faq", element: <FAQPage/>},
                {path: "/*", element: <NotFoundPage/>},
            ],
        },
    ];

    return useRoutes(isAuthorized ? (PrivateRoute) : (PublicRoutes));
};