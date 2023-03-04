import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Products} from "../../components";
import {ScrollTop} from "../../middleware/scrollTop";
import changeTitle from "../../middleware/changeTitle";
import {Location} from "../../components/ProductDetails/ProductDetails.styles";
import {FilterButton, Title} from "./Categories.styled";
import FilterCategory from "./FilterCategory/FilterCategory";

function Category() {

    const [active, setActive] = useState(false)

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
            <Title style={{marginTop: 30}}>{categoryName.split("-").join(" ")}</Title>
            <FilterButton onClick={() => setActive(prevState => !prevState)}><i className="fa-duotone fa-sliders-up"></i> Filter</FilterButton>
            <FilterCategory active={active}/>
            <Products products={filteredCategory}/>
        </div>
    );
}

export default Category;