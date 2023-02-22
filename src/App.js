import React from "react";
import {Home, Signup, Login, VerifyCode, NotFoundPage, SearchResults, Categories, Cart, Saved} from "./pages"
import {Navbar, ProductDetails} from "./components";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
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
        </>
    );
}

export default App;