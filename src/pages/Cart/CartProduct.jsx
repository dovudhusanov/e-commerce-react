import React, {useState} from 'react';
import {CartStyle} from "./CartStyle";
import {USDollar} from "../../middleware/PriceFormatter";

function CartProduct({id, image, productName, descr, price, setProduct, product}) {

    const [save, setSave] = useState(false)

    const handleDelete = (idx) => {
        setProduct(product.filter(item => item.id !== idx))
    }

    return (
        <CartStyle.ProductItems>
            <CartStyle.ProductLeft save={save}>
                <input type="checkbox"/>
                <div>
                    <img src={image} alt={productName}/>
                    <div>
                        <h3>{productName}</h3>
                        <span className="secondText">{descr}</span>
                        <div>
                            <button onClick={() => setSave(prevState => !prevState)}><i className="fa-sharp fa-solid fa-heart"></i> Save</button>
                            <button onClick={() => handleDelete(id)}><i className="fa-solid fa-trash"></i> Delete</button>
                        </div>
                    </div>
                </div>
            </CartStyle.ProductLeft>
            <CartStyle.ProductRight>
                <CartStyle.Counter>
                    <button><i className="fa-sharp fa-regular fa-minus"></i></button>
                    <span className="secondText">0</span>
                    <button><i className="fa-sharp fa-solid fa-plus"></i></button>
                </CartStyle.Counter>
                <CartStyle.Price>{USDollar.format(price)}</CartStyle.Price>
            </CartStyle.ProductRight>
        </CartStyle.ProductItems>
    );
}

export default CartProduct;