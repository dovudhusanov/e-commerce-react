import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {
    Location,
    Product, ProductImages,
    ProductImageSlider,
    ProductInfo,
    ProductItem,
    ProductMain,
    ProductName,
    ProductDescription

} from "./ProductDetails.styles";
import SliderSwiper from "./SliderSwiper/SliderSwiper";

function ProductDetails() {

    const {productId} = useParams()

    const products = useSelector(state => state.ProductsReducer)

    const product = products.products.filter(product => product.id == productId)

    return (
        <div className="container">
            {product.map(productItem => (
                <ProductMain key={productItem.id}>
                    <Location key={productItem.id}><Link to="/">Home</Link> <i className="fa-solid fa-angle-right"></i> <Link to={`/categories/${productItem.pathName}`}>{productItem.category} <i
                        className="fa-solid fa-angle-right"></i> </Link>{productItem.productName}</Location>
                    <Product>
                        <ProductName>
                            {productItem.productName}
                        </ProductName>
                      <ProductItem>
                        <ProductImages>
                            <SliderSwiper
                                images={productItem.sliderImages}
                            />
                        </ProductImages>
                          <ProductInfo>
                              <ProductDescription>
                                  <span>Description: </span>
                                  {productItem.descr}
                              </ProductDescription>
                          </ProductInfo>
                      </ProductItem>
                    </Product>
                </ProductMain>
            ))}
        </div>
    );
}

export default ProductDetails;