import React from 'react';
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";
import {useSelector} from "react-redux";
import {Products} from "../../components";

function Home() {
    ScrollTop();
    ChangeTitle("E-Commerce")
    const products = useSelector(state => state.ProductsReducer)
    return (
        <div className="container">
            <Products
                products={products.products}
            />
        </div>
    );
}

export default Home;