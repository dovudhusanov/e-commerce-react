import React from 'react';
import {useSelector} from "react-redux";
import Products from "../../components/Products/Products";

function Saved() {

    const products = useSelector(state => state.ProductReducer)

    const isFavourite = products.filter((product) => product.isFavourite)

    return (
        <div className="container">
            {isFavourite?.length > 0 && (
                <>
                    <h1>My Wishlist</h1>
                    <Products products={isFavourite}/>
                </>
            )}


        </div>
    );
}

export default Saved;