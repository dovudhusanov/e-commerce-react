import React, {useEffect, useState} from 'react';
import {CartStyles} from "./cart.styles";
import {USDollar} from "../../middleware/price-formatter";
import {useDispatch, useSelector} from "react-redux";
import {deleteProductFromCart, addToCart, uploadProduct} from "../../action/product-action";
import {ProductType} from "../../constants/product-type";
import {addWhishlist, deleteProductFromWhishlist, uploadWhishlist} from "../../action/wishlist-action";
import {Link} from "react-router-dom";

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
                     }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadProduct())
        dispatch(uploadWhishlist())
    }, [window.location.href])

    const deleteProduct = (id) => {
        dispatch(deleteProductFromCart({id}))
    }

    const handleAdd = (productItem) => {
        dispatch(addToCart(productItem))
    }

    const handleDelete = (productItem) => {
        dispatch(deleteProductFromCart(productItem.id))
    }

    const handleAddWhishlist = () => {
        dispatch(addWhishlist(product))
    }

    const handleRemoveWhishlist = () => {
        dispatch(deleteProductFromWhishlist({id}))
    }

    const whishlist = useSelector(state => state.WhishlistReducer.filter(filteredId => filteredId.id === id))

    return (
        <CartStyles.ProductItems>
            <CartStyles.ProductLeft save={isFavourite} whishlist={whishlist.length !== 0 && whishlist}>
                <input type="checkbox" checked={checkbox} onChange={(e) => {
                    setCheck(!checkbox)
                    dispatch({type: ProductType.TOGGLE_PRODUCT, payload: id})
                }}/>
                <div>
                    <img src={image} alt={productName}/>
                    <div>
                        <h3>
                            <Link to={`/categories/${product.pathName}/${id}`}>
                                {productName}
                            </Link>
                        </h3>
                        <span className="secondText">{descr}</span>
                        <div>
                            {whishlist.length !== 0 ? (
                                <button onClick={handleRemoveWhishlist}><i
                                    className="fa-sharp fa-solid fa-heart"></i> Saved
                                </button>
                            ) : (
                                <button onClick={handleAddWhishlist}><i className="fa-sharp fa-solid fa-heart"></i> Save
                                </button>
                            )}
                            <button onClick={() => deleteProduct(id)}><i className="fa-solid fa-trash"></i>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </CartStyles.ProductLeft>
            <CartStyles.ProductRight>
                <CartStyles.Counter>
                    <button onClick={() => {
                        setIsBuy(prevState => !prevState)
                        handleDelete(product)
                    }}><i className="fa-sharp fa-regular fa-minus"></i></button>
                    <span className="secondText">{quantity}</span>
                    <button onClick={() => {
                        setIsBuy(prevState => !prevState)
                        handleAdd(product)
                    }}><i className="fa-sharp fa-solid fa-plus"></i></button>
                </CartStyles.Counter>
                <CartStyles.Price>{quantity && USDollar.format(price * quantity)}</CartStyles.Price>
            </CartStyles.ProductRight>
        </CartStyles.ProductItems>
    );
}

export default CartProduct;