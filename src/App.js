import React, {useEffect} from "react";
import {Home, Signup, Login, VerifyCode, NotFoundPage, SearchResults, Categories, Cart, Saved} from "./pages"
import {Navbar, ProductDetails} from "./components";
import {Route, Routes, useNavigate} from "react-router-dom";
import FAQ from "./pages/FAQ/FAQ";
import MyOrders from "./pages/MyOrders/MyOrders";

function App() {

    const navigate = useNavigate()

    useEffect(() => {
        if (window.location.pathname === "/search" && window.location.search === "?query=" || window.location.search === "?query") {
            navigate("/")
        }
    }, [navigate])

    return (
        <>
            <Navbar/>
            <div className="main-app">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/my-orders" element={<MyOrders/>}/>
                    <Route path="/categories/:categoryName" element={<Categories/>}/>
                    <Route path="categories/:category/:productId" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/saved" element={<Saved/>}/>
                    <Route path="/search" element={<SearchResults
                        searchParams={new URLSearchParams(window.location.search).get("query")}/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/verify-phone-number" element={<VerifyCode/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;