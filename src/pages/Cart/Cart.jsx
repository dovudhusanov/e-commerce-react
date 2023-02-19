import React, {useEffect, useState} from 'react';
import {CartStyle} from "./CartStyle";
import CartProduct from "./CartProduct";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import {USDollar} from "../../middleware/PriceFormatter";
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";
import {useDispatch, useSelector} from "react-redux";
import {totalPriceBuilder} from "../../reducer/ProductReducer";
import {uploadProduct} from "../../action/ProductAction";

function Cart() {

    ScrollTop();
    ChangeTitle("Cart")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadProduct())
    }, [])

    const products = useSelector(state => state.ProductReducer)

    const [isBuy, setIsBuy] = useState(false)

    const [checkbox, setCheckbox] = useState(true)

    return (
        <div className="container">
            {Object.keys(products)?.length === 0 ? (
                <CartStyle.Empty>
                  <div>
                      <i className="fa-regular fa-cart-shopping"></i>
                      <h1>Your Cart is Empty</h1>
                      <Link to="/"><Button style={{marginTop: "20px"}}>Go to by Product</Button></Link>
                  </div>
                </CartStyle.Empty>
            ) : (
                <CartStyle.CartMain>
                    <CartStyle.CartProducts>
                        <CartStyle.Title><h1>Cart</h1><span className="secondText">Products: {products?.length}</span></CartStyle.Title>
                        {products?.map((product) => (
                            <CartProduct
                                key={product.id}
                                id={product.id}
                                productName={product.productName}
                                image={product.image}
                                productColor={product.color}
                                descr={product.descr}
                                price={product.price}
                                quantity={product.quantity}
                                product={product}
                                setIsBuy={setIsBuy}
                                checkbox={product.selected}
                                setCheck={setCheckbox}
                                isFavourite={product.isFavourite}
                            />
                        ))}
                    </CartStyle.CartProducts>
                    <CartStyle.CheckOut>
                       <div>
                           <CartStyle.Total>
                               <h1>Total</h1>
                               <h1>{USDollar.format(totalPriceBuilder(products, checkbox))}</h1>
                           </CartStyle.Total>
                           <CartStyle.CheckoutItems>
                               <span className="secondText">Product: {products?.length}</span>
                               <span className="secondText">Discount: -$10</span>
                               <Button style={{marginBottom: "20px", marginTop: "20px"}}>Go to Checkout</Button>
                               <span className="secondText">By ordering, you agree to the terms of use of the trading platform</span>
                           </CartStyle.CheckoutItems>
                       </div>
                    </CartStyle.CheckOut>
                </CartStyle.CartMain>
            )}
        </div>
    );
}

export default Cart;