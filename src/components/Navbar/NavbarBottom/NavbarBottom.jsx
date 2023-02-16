import React from 'react';
import {NavbarBottomStyle} from "./NavbarBottomStyle";
import {Link, NavLink} from "react-router-dom";

function NavbarBottom({setShowCategories}) {

    const categoryList = ["Electronic", "Household appliances", "Clothes", "Shoes", "Accessories", "Auto commodities", "Construction and repair", "food products", "Books", "Sports product"]

    const handleOpen = (e) => {
        e.stopPropagation();
        setShowCategories(prev => !prev)
    }

    return (
        <NavbarBottomStyle.NavbarBottom>
            {categoryList.map((item, index) => (
                <li key={index}><NavLink to={`/categories/${item}`}>{item}</NavLink></li>
            ))}
            <span onClick={handleOpen}>More <i className="fa-regular fa-angle-down"></i></span>
        </NavbarBottomStyle.NavbarBottom>
    );
}

export default NavbarBottom;