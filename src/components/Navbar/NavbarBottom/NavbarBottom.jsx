import React from 'react';
import {NavbarBottomStyle} from "./NavbarBottomStyle";
import {Link, NavLink} from "react-router-dom";
import {categoryList} from "../../../data/data";

function NavbarBottom({setShowCategories}) {

    const handleOpen = (e) => {
        e.stopPropagation();
        setShowCategories(prev => !prev)
    }

    return (
        <NavbarBottomStyle.NavbarBottom>
            {categoryList.map((item, index) => (
                <li key={index}><NavLink to={`/categories/${item.pathName}`}>{item.categoryName}</NavLink></li>
            ))}
            <span onClick={handleOpen}>More <i className="fa-regular fa-angle-down"></i></span>
        </NavbarBottomStyle.NavbarBottom>
    );
}

export default NavbarBottom;