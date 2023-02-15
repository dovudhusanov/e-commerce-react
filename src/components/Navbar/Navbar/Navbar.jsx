import React, {useState} from 'react';
import {NavbarStyle} from "./NavbarStyle"
import SearchBar from "../SearchBar/search";
import NavTop from "../NavTop/NavTop";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./Navbar.css"
import NavbarCategoryModal from "../NavbarCategoryModal/NavbarCategoryModal";
import NavbarBottom from "../NavbarBottom/NavbarBottom";

function Navbar() {
    const [showCategories, setShowCategories] = useState(false)
    const user = useSelector(state => state.LoginReducer)
    return (
        <>
            <NavTop/>
            <NavbarStyle.Navbar>
                <div className="container">
                    <NavbarStyle.NavbarItems>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <NavbarStyle.Burger>
                                <i className="fa-regular fa-bars"></i>
                            </NavbarStyle.Burger>
                            <Link to="/"><NavbarStyle.Logo>e-commerce</NavbarStyle.Logo></Link>
                        </div>
                        <NavbarStyle.SearchBar>
                            <NavbarStyle.CategoryButton onClick={() => setShowCategories(prevState => !prevState)} className={showCategories ? "open-categories" : ""}>
                                <NavbarStyle.CategoryIcon>
                                    <NavbarStyle.CategoryBtnRect>
                                        <div></div>
                                    </NavbarStyle.CategoryBtnRect>
                                    <NavbarStyle.CategoryBtnTop></NavbarStyle.CategoryBtnTop>
                                    <NavbarStyle.CategoryBtnBottom></NavbarStyle.CategoryBtnBottom>
                                </NavbarStyle.CategoryIcon>
                                <NavbarStyle.CategoryButtonText>Category</NavbarStyle.CategoryButtonText>
                            </NavbarStyle.CategoryButton>
                            <SearchBar/>
                        </NavbarStyle.SearchBar>
                        <NavbarStyle.NavbarRight>
                            {localStorage.getItem("user")
                                ?
                                <Link to="/profile"><i className="fa-light fa-user"></i><span>{user?.name}</span></Link>
                                : <Link to="/login"><i className="fa-light fa-user"></i><span>Login</span></Link>
                            }
                            <Link to="/saved"><i className="fa-light fa-heart"></i><span>Saved</span></Link>
                            <Link to="/cart"><i className="fa-light fa-cart-shopping"></i><span>Cart</span></Link>
                        </NavbarStyle.NavbarRight>
                    </NavbarStyle.NavbarItems>
                    <NavbarBottom setShowCategories={setShowCategories}/>
                </div>
            </NavbarStyle.Navbar>
            <NavbarCategoryModal showCategory={showCategories}/>
        </>
    );
}
export default Navbar;