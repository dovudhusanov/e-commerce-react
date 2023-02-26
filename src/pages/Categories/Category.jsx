import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Products} from "../../components";
import {ScrollTop} from "../../middleware/scrollTop";
import changeTitle from "../../middleware/changeTitle";
import {Location} from "../../components/ProductDetails/ProductDetails.styles";

function Category() {

    const {categoryName} = useParams()

    ScrollTop()

    changeTitle(categoryName.split("-").join(" "))

    const products = useSelector(state => state.ProductsReducer)

    const filteredCategory = products.products.filter(product => product.pathName === categoryName)

    return (
        <div className="container">
            <Location>
                <Link to="/">Home</Link> <i className="fa-solid fa-angle-right"></i> {categoryName.split("-").join(" ")}
            </Location>
            <h2 style={{marginTop: 30}}>{categoryName.split("-").join(" ")}</h2>
            <Products products={filteredCategory}/>
        </div>
    );
}

export default Category;