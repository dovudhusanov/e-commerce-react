import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Products} from "../../components";
import {uploadProduct} from "../../action/product-action";
import {uploadWhishlist} from "../../action/wishlist-action";
import {NotFoundPageStyles} from "../not-found/not-found-page/not-found-page.styles";
import {Link} from "react-router-dom";
import img from "../../assets/whishlist-empty.png"
import {ChangeTitle, ScrollTop} from "../../middleware";

function Saved() {

    ScrollTop()
    ChangeTitle("My WhishlistIcon")

    const whishlist = useSelector(state => state.WhishlistReducer)
    console.log(whishlist)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadProduct())
        dispatch(uploadWhishlist())
    }, [window.location.href])

    return (
        <div className="container">
            {whishlist?.length === 0 ? (
                <NotFoundPageStyles.NotFound>
                    <img src={img} alt="empty"/>
                    <h1>Go to the main page and click on the ♡ in the product</h1>
                    <Link to="/">
                        <Button>Back to Main</Button>
                    </Link>
                </NotFoundPageStyles.NotFound>
            ) : (
                <Products products={whishlist}/>
            )}
        </div>
    );
}

export default Saved;