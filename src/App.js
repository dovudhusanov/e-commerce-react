import React, {useEffect} from "react";
import {Home} from "./pages"
import {Login, Navbar, Signup} from "./components";
import {Route, Routes, useNavigate} from "react-router-dom";
import VerifyCode from "./components/VerifyCode/VerifyCode";

function App() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/verify-phone-number" element={<VerifyCode />} />
            </Routes>
        </>
    );
}

export default App;