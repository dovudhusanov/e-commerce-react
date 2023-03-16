import React, {useEffect} from "react";
import {Home, Signup, Login, VerifyCode, NotFoundPage, SearchResults, Categories, Cart, Saved} from "./pages"
import {ProductDetails} from "./components";
import {Route, Routes, useNavigate} from "react-router-dom";
import FAQ from "./pages/faq/faq";
import {BaseLayout} from "./layout/base-layout";
import {MyInfos, MyOrders, Settings} from "./pages/profile";

function App() {

    const navigate = useNavigate()

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
                            <Route path="/user" element={<MyInfos />} />
                            <Route path="/profile" element={<MyInfos />} />
                            <Route path="/user/my-orders" element={<MyOrders/>}/>
                            <Route path="/user/info" element={<MyInfos />} />
                            <Route path="/user/settings" element={<Settings />} />
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
                        </>
                    )}
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </BaseLayout>
        </>
    );
}

export default App;