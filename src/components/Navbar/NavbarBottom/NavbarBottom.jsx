import React from 'react';
import {NavbarBottomStyle} from "./NavbarBottomStyle";
import {Link} from "react-router-dom";

function NavbarBottom({setShowCategories}) {

    const categoryList = ["Electronic", "Household appliances", "Clothes", "Shoes", "Accessories", "Auto commodities", "Construction and repair", "food products", "Books", "Sports product"]

    return (
        <NavbarBottomStyle.NavbarBottom>
            {categoryList.map((item, index) => (
                <li key={index}><Link to="/">{item}</Link></li>
            ))}
            <span onClick={() => setShowCategories(prev => !prev)}>More <i className="fa-regular fa-angle-down"></i></span>
        </NavbarBottomStyle.NavbarBottom>
    );
}

export default NavbarBottom;