import React from 'react';
import {useSelector} from "react-redux";
import {Products} from "../../components";
import {ChangeTitle, ScrollTop} from "../../middleware";

function Home() {
    ScrollTop();
    ChangeTitle("E-Commerce")
    const products = useSelector(state => state.ProductsReducer);

    return (
        <div className="container">
            <Products
                products={products.products}
            />
        </div>
    );
}

export default Home;