import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Location, Product, ProductImageSlider, ProductInfo, ProductItem, ProductName} from "./ProductDetails.styles";

function ProductDetails() {

    const {productId} = useParams()

    const products = useSelector(state => state.ProductsReducer)

    const product = products.products.filter(product => product.id == productId)

    return (
        <div className="container">
            {product.map(productItem => (
                <Product key={productItem.id}>
                    <Location key={productItem.id}><Link to="/">Home</Link> <i className="fa-solid fa-angle-right"></i> <Link to={`/categories/${productItem.pathName}`}>{productItem.category} <i
                        className="fa-solid fa-angle-right"></i> </Link>{productItem.productName}</Location>
                    <ProductItem>
                        <ProductImageSlider>
                        </ProductImageSlider>
                        <img src={productItem.image} alt={productItem.productName}/>
                        <ProductInfo>
                            <ProductName>
                                <span>Product Name:</span>
                                {productItem.productName}
                            </ProductName>
                            <ProductName>
                                <span>Description: </span>
                                {productItem.descr}
                            </ProductName>
                        </ProductInfo>
                    </ProductItem>
                </Product>
            ))}
        </div>
    );
}

export default ProductDetails;