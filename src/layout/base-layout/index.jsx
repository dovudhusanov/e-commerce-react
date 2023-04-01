import {Footer, Navbar} from "../../components";
import {BaseLayoutMain} from "./base-layout.styles";
import React from "react";
import {ScrollToTop} from "../../middleware";

export function BaseLayout({children}) {
    return (
        <>
            <Navbar/>
            <BaseLayoutMain> {children}</BaseLayoutMain>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}