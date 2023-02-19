import React from 'react';
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";
import Products from "../../components/Products/Products";
import {useSelector} from "react-redux";

function Home() {
    ScrollTop();
    ChangeTitle("E-Commerce")
    const products = useSelector(state => state.ProductsReducer)
    return (
        <div className="container">
            <Products
                products={products.products}
                lenght={10}
            />
        </div>
    );
}

export default Home;