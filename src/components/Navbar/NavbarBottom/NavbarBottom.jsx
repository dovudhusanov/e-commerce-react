import React, {useState} from 'react';
import {
    NavbarBottomStyle,
    NavbarBottomRight,
    CategoryButton,
    CategoryIcon,
    CategoryBtnRect,
    CategoryBtnTop, CategoryBtnBottom, NavbarBottomItem, CartLength
} from "./NavbarBottomStyle";
import {Link, NavLink} from "react-router-dom";
import {categoryList} from "../../../data/data";
import {Button} from "../../index";
import {useSelector} from "react-redux";

function NavbarBottom() {

    const [showCategories, setShowCategories] = useState(false)

    const user = useSelector(state => state.LoginReducer)
    const productLength = useSelector(state => state.ProductReducer)

    const state = JSON.parse(localStorage.getItem("product"))

    function openCategoryBtn() {

    }

    return (
        <NavbarBottomStyle.NavbarBottom>
            {/*{categoryList.map((item, index) => (*/}
            {/*    <li key={index}><NavLink to={`/categories/${item.pathName}`}>{item.categoryName}</NavLink></li>*/}
            {/*))}*/}
           <div className="container">
               <NavbarBottomItem>
                   <div>
                       <CategoryButton onClick={openCategoryBtn} className={showCategories ? "open-categories" : ""}>
                           <CategoryIcon>
                               <CategoryBtnRect>
                                   <div></div>
                               </CategoryBtnRect>
                               <CategoryBtnTop></CategoryBtnTop>
                               <CategoryBtnBottom></CategoryBtnBottom>
                           </CategoryIcon>
                       </CategoryButton>
                       <NavLink to="/faq">FAQ</NavLink>
                       <NavLink to="/my-orders">My Order</NavLink>
                   </div>
                   <NavbarBottomRight>
                       <NavLink to="/saved"><i
                           className="fa-light fa-heart"></i><span>Saved</span></NavLink>
                       <NavLink to="/cart"><CartLength className="cart-length">{productLength.length || state.length}</CartLength> <i
                           className="fa-light fa-cart-shopping"></i><span>Cart</span></NavLink>
                   </NavbarBottomRight>
               </NavbarBottomItem>
           </div>
        </NavbarBottomStyle.NavbarBottom>
    );
}

export default NavbarBottom;