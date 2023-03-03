import React from 'react';
import {ProductStyle} from "../../pages/Home/HomeStyle";
import Product from "./Product/Product";
import {NotFoundPage} from "../../pages";

function Products({products, lenght}) {
    return (
        <>
            {products?.length === 0 ? (
                <NotFoundPage />
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