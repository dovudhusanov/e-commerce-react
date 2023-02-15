import React from 'react';
import {NavTopStyle} from "./NavTopStyle";

function NavTop() {
    return (
        <NavTopStyle.NavbarTop>
            <div className="container">
                <NavTopStyle.NavbarTopItems>
                    <NavTopStyle.NavTopLocation>
                        <span><i className="fa-regular fa-location-dot"></i> Country: <span>Namangan</span></span>
                        <span>Pickup points</span>
                    </NavTopStyle.NavTopLocation>
                    <NavTopStyle.NavTopCenter>
                        We will deliver your order for free - in just 1 day!
                    </NavTopStyle.NavTopCenter>
                    <NavTopStyle.NavTopRight>
                        <span>FAQ</span>
                        <span>My orders</span>
                        <span style={{cursor: "pointer"}}><img src="./assets/america.png" alt="america"/> English</span>
                    </NavTopStyle.NavTopRight>
                </NavTopStyle.NavbarTopItems>
            </div>
        </NavTopStyle.NavbarTop>
    );
}

export default NavTop;