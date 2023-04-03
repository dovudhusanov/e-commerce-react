import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {BaseLayout} from "./layout/base-layout";
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import {Routes} from "./routes";

NProgress.configure({color: '#29d', showSpinner: false})

function App() {

    const navigate = useNavigate()

    let location = useLocation();

    useEffect(() => {
        NProgress.start();
        NProgress.done();
    }, [location.pathname]);

    useEffect(() => {
        if (window.location.pathname === "/search" && window.location.search === "?query=" || window.location.search === "?query") navigate("/")
    }, [window.location, navigate])

    return (
        <>
            <BaseLayout>
                <Routes/>
            </BaseLayout>
        </>
    );
}

export default App;