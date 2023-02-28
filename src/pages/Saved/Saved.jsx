import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Products} from "../../components";
import {uploadProduct} from "../../action/ProductAction";
import {uploadWhishlist} from "../../action/WishlistAction";

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
                <>
                   Empty
                </>
            ) : (
                <Products products={whishlist}/>
            )}
        </div>
    );
}

export default Saved;