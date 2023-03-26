import React, {useEffect} from "react";
import {
    Home,
    Signup,
    Login,
    VerifyCode,
    NotFoundPage,
    SearchResults,
    Categories,
    Cart,
    Saved,
    ResetPassword
} from "./pages"
import {ProductDetails} from "./components";
import {Route, Routes, useNavigate} from "react-router-dom";
import FAQ from "./pages/faq/faq";
import {BaseLayout} from "./layout/base-layout";
import {ChangePassword, ChangePhoneNumber, MyInfos, MyOrders, Settings} from "./pages/profile";
import NewPassword from "./pages/new-password";
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({color: '#29d', showSpinner: false})

function App() {

    const navigate = useNavigate()

        document.addEventListener("DOMContentLoaded", NProgress.start());
        document.addEventListener("DOMContentLoaded", NProgress.done());

    useEffect(() => {
        if (window.location.pathname === "/search" && window.location.search === "?query=" || window.location.search === "?query") {
            navigate("/")
        }
        if (localStorage.getItem("access") && window.location.pathname === "/login") {
            navigate("/")
        }
        if (localStorage.getItem("access") && window.location.pathname === "/signup") {
            navigate("/")
        }
        if (localStorage.getItem("access") && window.location.pathname === "/user") {
            navigate("/user/info")
        }
        if (localStorage.getItem("access") && window.location.pathname === "/profile") {
            navigate("/user/info")
        }
    }, [window.location, navigate])


    return (
        <>
            <BaseLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/wishlist" element={<Saved/>}/>
                    {localStorage.getItem("access") && (
                        <>
                            <Route path="/user" element={<MyInfos/>}/>
                            <Route path="/profile" element={<MyInfos/>}/>
                            <Route path="/user/my-orders" element={<MyOrders/>}/>
                            <Route path="/user/info" element={<MyInfos/>}/>
                            <Route path="/user/settings" element={<Settings/>}/>
                            <Route path="/user/change-password" element={<ChangePassword/>}/>
                            <Route path="/user/change-phone-number" element={<ChangePhoneNumber/>}/>
                        </>
                    )}
                    <Route path="/categories/:categoryName" element={<Categories/>}/>
                    <Route path="categories/:category/:productId" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/search" element={<SearchResults
                        searchParams={new URLSearchParams(window.location.search).get("query")}/>}/>
                    {!localStorage.getItem("access") && (
                        <>
                            <Route path="/signup" element={<Signup/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/verify-phone-number" element={<VerifyCode/>}/>
                            <Route path="/reset-password" element={<ResetPassword/>}/>
                            <Route path="/new-password" element={<NewPassword/>}/>
                        </>
                    )}
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </BaseLayout>
        </>
    );
}

export default App;