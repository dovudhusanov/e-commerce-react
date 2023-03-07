import React, {useEffect, useState} from 'react';
import {NavbarMainStyle} from "./NavbarMainStyle"
import SearchBar from "../SearchBar/search";
import {Link, NavLink} from "react-router-dom";
import "./NavbarMain.css"
import {Button} from "../../../index";
import {CartLength} from "../NavbarBottom/NavbarBottomStyle";
import {useSelector} from "react-redux";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import NavbarBottom from "../NavbarBottom/NavbarBottom";

function NavbarMain() {

    const productLength = useSelector(state => state.ProductReducer)

    const state = JSON.parse(localStorage.getItem("product"))

    const [sModal, setSModal] = useState(false)

    return (
        <>
            <MobileSidebar setSModal={setSModal} sModal={sModal}/>
            <NavbarMainStyle.Navbar>
                <div className="container">
                    <NavbarMainStyle.NavbarItems>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <NavbarMainStyle.Burger onClick={() => setSModal(true)}>
                                <i className="fa-regular fa-bars"></i>
                            </NavbarMainStyle.Burger>
                            <Link to="/"><NavbarMainStyle.Logo>e-commerce</NavbarMainStyle.Logo></Link>
                        </div>
                        <NavbarMainStyle.SearchBar>
                            <SearchBar/>
                        </NavbarMainStyle.SearchBar>
                        <NavbarMainStyle.NavbarRight user={localStorage.getItem("access")}>
                            {localStorage.getItem("access") ? (
                                <NavLink to="/profile"><Button>Profile</Button></NavLink>
                            ) : (
                                <>
                                    <NavLink to="/login" className="auth-icon"><Button><span>Log in</span></Button></NavLink>
                                    <NavLink to="/signup" className="auth-icon"><Button><span>Sign up</span></Button></NavLink>
                                </>
                            )}
                            <NavLink to="/login" className="icon-nav"><Button><i
                                className="fa-regular fa-user"></i></Button></NavLink>
                            <NavLink to="/cart" className="icon-nav">
                                {productLength?.length === 0 || state?.length === 0 ? null : (
                                    <CartLength className="cart-length">{productLength?.length || state?.length}</CartLength>
                                )}
                                <Button><i className="fa-light fa-cart-shopping"></i></Button></NavLink>
                        </NavbarMainStyle.NavbarRight>
                    </NavbarMainStyle.NavbarItems>
                </div>
                <NavbarBottom />
            </NavbarMainStyle.Navbar>
        </>
    );
}

export default NavbarMain;