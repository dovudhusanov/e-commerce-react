import React from 'react';
import {ProductStyle} from "../../pages/Home/HomeStyle";
import EmptyImg from "../../assets/whishlist-empty.png"
import {Link} from "react-router-dom";
import {Button} from "../index";
import Product from "./Product/Product";

function Products({products, lenght, }) {
    return (
        <>
            {products?.length === 0 ? (
                <ProductStyle.Empty>
                    <div>
                        <img src={EmptyImg} alt="empty"/>
                        <h1>Add your favorite product</h1>
                        <span className="secondText">Click the ♡ symbol on the product. Log in and all your selections will be saved</span>
                        <Link to="/login" style={{display: "block"}}><Button>Log in to Account</Button></Link>
                    </div>
                </ProductStyle.Empty>
            ) : (
                <ProductStyle.Products>
                    {products.slice(lenght ? (0, 25) : 0,).map((product, index) => (
                       <Product
                            key={product.id}
                            product={product}
                            index={index}
                       />
                    ))}
                </ProductStyle.Products>
            )}
        </>
    );
}

export default Products;