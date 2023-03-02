import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Products} from "../../components";
import {uploadProduct} from "../../action/ProductAction";
import {uploadWhishlist} from "../../action/WishlistAction";
import {NotFoundPageStyle} from "../NotFound/NotFoundPage/NotFoundPageStyle";
import {Link} from "react-router-dom";
import img from "../../assets/whishlist-empty.png"

function Saved() {

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
                <NotFoundPageStyle.NotFound>
                    <img src={img} alt="empty"/>
                    <h1>Go to the main page and click on the ♡ in the product</h1>
                    <Link to="/">
                        <Button>Back to Main</Button>
                    </Link>
                </NotFoundPageStyle.NotFound>
            ) : (
                <Products products={whishlist}/>
            )}
        </div>
    );
}

export default Saved;