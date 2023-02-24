import React, {useEffect, useState} from 'react';
import {NavbarStyle} from "./NavbarStyle"
import SearchBar from "../SearchBar/search";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import "./Navbar.css"
import NavbarBottom from "../NavbarBottom/NavbarBottom";
import {Button} from "../../index";

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY > 0;
            if (isTop !== isScrolled) {
                setIsScrolled(isTop);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    const navbarStyle = {
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0,0,0,0.15)" : "none",
    };

    return (
        <>
            <NavbarStyle.Navbar style={navbarStyle}>
                <div className="container">
                    <NavbarStyle.NavbarItems>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <NavbarStyle.Burger>
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
                            <NavLink to="/cart" className="cart-icon"><Button><i className="fa-light fa-cart-shopping"></i></Button></NavLink>
                        </NavbarStyle.NavbarRight>
                    </NavbarStyle.NavbarItems>
                </div>
                <NavbarBottom/>
            </NavbarStyle.Navbar>
        </>
    );
}

export default Navbar;