import React, {useEffect, useState} from 'react';
import {CartStyle} from "./CartStyle";
import {USDollar} from "../../middleware/PriceFormatter";
import {useDispatch} from "react-redux";
import {deleteProductFromCart, addToCart, uploadProduct} from "../../action/ProductAction";
import {ProductType} from "../../constants/ProductType";

function CartProduct({
     id,
     image,
     productName,
     descr,
     price,
     quantity,
     product,
     setIsBuy,
     checkbox,
     setCheck,
     isFavourite
}){

    const [save, setSave] = useState(false)

    const dispatch = useDispatch()

    const deleteProduct = (id) => {
        dispatch(deleteProductFromCart({id}))
    }

    const handleAdd = (productItem) => {
        dispatch(addToCart(productItem))
    }

    const handleDelete = (productItem) => {
        dispatch(deleteProductFromCart(productItem.id))
    }

    return (
        <CartStyle.ProductItems>
            <CartStyle.ProductLeft save={isFavourite}>
                <input type="checkbox" checked={checkbox} onChange={(e) => {
                    setCheck(!checkbox)
                    dispatch({type: ProductType.TOGGLE_PRODUCT, payload: id})
                }}/>
                <div>
                    <img src={image} alt={productName}/>
                    <div>
                        <h3>{productName}</h3>
                        <span className="secondText">{descr}</span>
                        <div>
                            <button onClick={() => {
                                setSave(prevState => !prevState)
                            }}><i className="fa-sharp fa-solid fa-heart"></i> Save
                            </button>
                            <button onClick={() => deleteProduct(id)}><i className="fa-solid fa-trash"></i>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </CartStyle.ProductLeft>
            <CartStyle.ProductRight>
                <CartStyle.Counter>
                    <button onClick={() => {
                        setIsBuy(prevState => !prevState)
                        handleDelete(product)
                    }}><i className="fa-sharp fa-regular fa-minus"></i></button>
                    <span className="secondText">{quantity}</span>
                    <button onClick={() => {
                        setIsBuy(prevState => !prevState)
                        handleAdd(product)
                    }}><i className="fa-sharp fa-solid fa-plus"></i></button>
                </CartStyle.Counter>
                <CartStyle.Price>{quantity && USDollar.format(price * quantity)}</CartStyle.Price>
            </CartStyle.ProductRight>
        </CartStyle.ProductItems>
    );
}

export default CartProduct;