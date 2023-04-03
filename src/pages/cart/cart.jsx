import React, {useEffect, useState} from 'react';
import {CartStyles} from "./cart.styles";
import CartProduct from "./cart-product";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";
import {USDollar} from "../../middleware/price-formatter";
import {useDispatch, useSelector} from "react-redux";
import {totalPriceBuilder} from "../../reducer/product-reducer";
import {uploadProduct} from "../../action/product-action";
import {ChangeTitle, ScrollTop} from "../../middleware";

function Cart() {

    ScrollTop();
    ChangeTitle("Cart")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadProduct())
    }, [window.location.href])

    console.log(window.location.href)

    const products = useSelector(state => state.ProductReducer)

    const [isBuy, setIsBuy] = useState(false)

    const [checkbox, setCheckbox] = useState(true)

    return (
        <div className="container">
            {Object.keys(products)?.length === 0 ? (
                <CartStyles.Empty>
                  <div>
                      <i className="fa-regular fa-cart-shopping"></i>
                      <h1>Your Cart is Empty</h1>
                      <Link to="/"><Button style={{marginTop: "20px"}}>Go to buy Product</Button></Link>
                  </div>
                </CartStyles.Empty>
            ) : (
                <CartStyles.CartMain>
                    <CartStyles.CartProducts>
                        <CartStyles.Title><h1>Cart</h1><span className="secondText">Products: {products?.length}</span></CartStyles.Title>
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
                    </CartStyles.CartProducts>
                    <CartStyles.CheckOut>
                       <CartStyles.Card>
                           <CartStyles.Total>
                               <h1>Total</h1>
                               <h1>{USDollar.format(totalPriceBuilder(products, checkbox))}</h1>
                           </CartStyles.Total>
                           <CartStyles.CheckoutItems>
                               <span className="secondText">Product: {products?.length}</span>
                               <span className="secondText">Discount: -$10</span>
                               <Button style={{marginBottom: "20px", marginTop: "20px"}}>Go to Checkout</Button>
                               <span className="secondText">By ordering, you agree to the terms of use of the trading platform</span>
                           </CartStyles.CheckoutItems>
                       </CartStyles.Card>
                        <CartStyles.MobileBottomFooter>
                            <div>
                                <span>My order</span>
                                <span>{USDollar.format(totalPriceBuilder(products, checkbox))}</span>
                            </div>
                            <Button>Go to Checkout</Button>
                        </CartStyles.MobileBottomFooter>
                    </CartStyles.CheckOut>
                </CartStyles.CartMain>
            )}
        </div>
    );
}

export default Cart;