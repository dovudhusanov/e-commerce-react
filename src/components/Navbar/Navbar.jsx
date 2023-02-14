import React from 'react';
import {NavbarStyle} from "./NavbarStyle";

function Navbar() {
    return (
        <>
            <NavbarStyle.NavbarTop>
                <div className="container">
                    <NavbarStyle.NavbarTopItems>
                        <NavbarStyle.NavTopLocation>
                            <span><i className="fa-regular fa-location-dot"></i> Country: <span>Namangan</span></span>
                            <span>Pickup points</span>
                        </NavbarStyle.NavTopLocation>
                        <NavbarStyle.NavTopCenter>
                            We will deliver your order for free - in just 1 day!
                        </NavbarStyle.NavTopCenter>
                        <NavbarStyle.NavTopRight>
                            <span>FAQ</span>
                            <span>My orders</span>
                            <span style={{cursor: "pointer"}}><img src="./assets/america.png" alt="america"/> English</span>
                        </NavbarStyle.NavTopRight>
                    </NavbarStyle.NavbarTopItems>
                </div>
            </NavbarStyle.NavbarTop>
        </>
    );
}

export default Navbar;