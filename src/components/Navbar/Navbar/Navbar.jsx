import React, {useEffect, useState} from 'react';
import {NavbarStyle} from "./NavbarStyle"
import SearchBar from "../SearchBar/search";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css"
import NavbarBottom from "../NavbarBottom/NavbarBottom";
import {Button} from "../../index";
import {CartLength} from "../NavbarBottom/NavbarBottomStyle";
import {useSelector} from "react-redux";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

function Navbar() {

    const productLength = useSelector(state => state.ProductReducer)

    const state = JSON.parse(localStorage.getItem("product"))

    const [sModal, setSModal] = useState(false)

    return (
        <>
            <MobileSidebar setSModal={setSModal} sModal={sModal}/>
            <NavbarStyle.Navbar>
                <div className="container">
                    <NavbarStyle.NavbarItems>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <NavbarStyle.Burger onClick={() => setSModal(true)}>
                                <i className="fa-regular fa-bars"></i>
                            </NavbarStyle.Burger>
                            <Link to="/"><NavbarStyle.Logo>e-commerce</NavbarStyle.Logo></Link>
                        </div>
                        <NavbarStyle.SearchBar>
                            <SearchBar/>
                        </NavbarStyle.SearchBar>
                        <NavbarStyle.NavbarRight>
                            <NavLink to="/login" className="auth-icon"><Button><span>Log in</span></Button></NavLink>
                            <NavLink to="/signup" className="auth-icon"><Button><span>Sign up</span></Button></NavLink>
                            <NavLink to="/login" className="icon-nav"><Button><i
                                className="fa-regular fa-user"></i></Button></NavLink>
                            <NavLink to="/cart" className="icon-nav"><CartLength
                                className="cart-length">{productLength?.length || state?.length || 0}</CartLength>
                                <Button><i className="fa-light fa-cart-shopping"></i></Button></NavLink>
                        </NavbarStyle.NavbarRight>
                    </NavbarStyle.NavbarItems>
                </div>
                <NavbarBottom/>
            </NavbarStyle.Navbar>
        </>
    );
}

export default Navbar;