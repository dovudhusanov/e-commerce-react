import React, {useEffect, useState} from 'react';
import {ProductStyle} from "../../../pages/Home/HomeStyle";
import {USDollar} from "../../../middleware/PriceFormatter";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, uploadProduct} from "../../../action/ProductAction";
import {Button} from "../../index";
import {Link} from "react-router-dom";
import {addWhishlist, deleteProductFromWhishlist, uploadWhishlist} from "../../../action/WishlistAction";

function Product({product}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadProduct())
        dispatch(uploadWhishlist())
    }, [window.location.href])

    const whishlist = useSelector(state => state.WhishlistReducer.filter(whishlistFilter => whishlistFilter.id === product.id))

    function ProductSaveButton({productItem}) {

        const handleAdd = () => {
            dispatch(addWhishlist(productItem))
        };

        const handleRemove = () => {
            dispatch(deleteProductFromWhishlist({id: productItem.id}))
        }

        return (
            <i>{whishlist.length !== 0 ? <i className="fa-solid fa-heart" onClick={handleRemove}></i> :
                <i className="fa-light fa-heart" onClick={handleAdd}></i>}</i>
        );
    }

    function ProdcutButton({productItem}) {

        const handleAdd = (productItem) => {
            dispatch(addToCart(productItem))
        }

        const productAdded = useSelector(state => state.ProductReducer.filter(productFilter => productFilter.id === product.id))

        return (
            <Button productAdded={productAdded} style={{fontSize: "12px"}} onClick={() => handleAdd(productItem)}>{productAdded.length !== 0 ? "Added" : "Add to Cart"}</Button>
        );
    }

    return (
        <ProductStyle.ProdcutCard>
            <Link to={`/categories/${product.pathName}/${product.id}`}>
                <img src={product.image} alt={product.productName}/>
            </Link>
            <ProductStyle.Price>{USDollar.format(product.price)}</ProductStyle.Price>
            <ProductStyle.ProductInfo>
                <span>{product.productName} {product.descr.slice(0, 20)}</span>
                <div>
                    <div>
                        <i className="fa-light fa-eye"></i>
                        <ProductSaveButton productItem={product} id={product.id}/>
                    </div>
                    <ProdcutButton productItem={product}/>
                </div>
            </ProductStyle.ProductInfo>
        </ProductStyle.ProdcutCard>
    );
}

export default Product;