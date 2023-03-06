import React, {useState} from 'react';
import {
    NavbarBottomStyle,
    NavbarBottomRight,
    CategoryButton,
    NavbarBottomItem, CartLength
} from "./NavbarBottomStyle";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import CategoriesModal from "../CategoriesModal/CategoriesModal";
import BtnCategoryIcon from "../CategoryIcon";

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
                           <BtnCategoryIcon />
                        </CategoryButton>
                        <div>
                            <NavLink to="/faq">FAQ</NavLink>
                            <NavLink to="/my-orders">My Order</NavLink>
                        </div>
                    </div>
                    <NavbarBottomRight>
                        <NavLink to="/wishlist"><i
                            className="fa-light fa-heart"></i><span>Wishlist</span></NavLink>
                        <NavLink to="/cart">{productLength?.length === 0 || state?.length === 0 ? null : (
                            <CartLength className="cart-length">{productLength?.length || state?.length}</CartLength>
                        )}<i className="fa-light fa-cart-shopping"></i><span>Cart</span></NavLink>
                    </NavbarBottomRight>
                </NavbarBottomItem>
            </div>
        </NavbarBottomStyle.NavbarBottom>
    );
}

export default NavbarBottom;