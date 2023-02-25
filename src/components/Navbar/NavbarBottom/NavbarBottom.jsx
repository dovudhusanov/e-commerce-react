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
import CategoriesModal from "../CategoriesModal/CategoriesModal";

function NavbarBottom() {

    const [showCategories, setShowCategories] = useState(false)

    const user = useSelector(state => state.LoginReducer)
    const productLength = useSelector(state => state.ProductReducer)

    const state = JSON.parse(localStorage.getItem("product"))

    function openCategoryBtn(e) {
        setShowCategories(prevState => !prevState)
        e.stopPropagation()
    }

    window.addEventListener("click", () => {
        setShowCategories(false)
    })

    return (
        <NavbarBottomStyle.NavbarBottom>
            <div className="container">
                <CategoriesModal showCategories={showCategories} setShowCategories={setShowCategories}/>
            </div>
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
                        <div>
                            <NavLink to="/faq">FAQ</NavLink>
                            <NavLink to="/my-orders">My Order</NavLink>
                        </div>
                    </div>
                    <NavbarBottomRight>
                        <NavLink to="/saved"><i
                            className="fa-light fa-heart"></i><span>Saved</span></NavLink>
                        <NavLink to="/cart"><CartLength
                            className="cart-length">{productLength?.length || state?.length || 0}</CartLength> <i
                            className="fa-light fa-cart-shopping"></i><span>Cart</span></NavLink>
                    </NavbarBottomRight>
                </NavbarBottomItem>
            </div>
        </NavbarBottomStyle.NavbarBottom>
    );
}

export default NavbarBottom;