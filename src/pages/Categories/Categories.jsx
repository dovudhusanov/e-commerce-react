import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Products from "../../components/Products/Products";

function Categories() {

    const {categoryName} = useParams()

    const products = useSelector(state => state.ProductsReducer)

    const filteredCategory = products.products.filter(product => product.pathName === categoryName)

    return (
        <div className="container">
            <h1 style={{marginTop: "40px"}}>{categoryName.split("-").join(" ")}</h1>
            <Products products={filteredCategory}/>
        </div>
    );
}

export default Categories;