import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "../../action/ProductAction";
import {ProductStyle} from "../../pages/Home/HomeStyle";
import {USDollar} from "../../middleware/PriceFormatter";
import Button from "../Button/Button";
import EmptyImg from "../../assets/whishlist-empty.png"
import {Link} from "react-router-dom";
import {ProductType} from "../../constants/ProductType";

function Products({products, lenght}) {

    const dispatch = useDispatch()
    const [saved, setSaved] = useState(false);
    function ProductSaveButton({productItem}) {


        const handleAdd = () => {
            setSaved(!saved)
            dispatch({type: ProductType.TOOGLE_FAVOURITE, payload: productItem.id})
        };

        const handleRemove = () => {
            setSaved(!saved)
            dispatch({type: ProductType.TOOGLE_FAVOURITE, payload: productItem.id})
        }

        return (
            <i>{productItem.isFavourite ? <i className="fa-solid fa-heart" onClick={handleRemove}></i> :
                <i className="fa-light fa-heart" onClick={handleAdd}></i>}  </i>
        );
    }

    const handleAdd = (productItem) => {
        dispatch(addToCart(productItem))
    }

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
                    {products.slice(lenght ? (0, 25) : 0,).map((product) => (
                        <ProductStyle.ProdcutCard key={product.id}>
                            <img src={product.image} alt={product.productName}/>
                            <ProductStyle.Price>{USDollar.format(product.price)}</ProductStyle.Price>
                            <ProductStyle.ProductInfo>
                                <span>{product.productName} {product.descr.slice(0, 20)}</span>
                                <div>
                                    <div>
                                        <i className="fa-light fa-eye"></i>
                                        <ProductSaveButton productItem={product}/>
                                    </div>
                                    <Button style={{fontSize: "12px"}} onClick={() => handleAdd(product)}>Add to
                                        Cart</Button>
                                </div>
                            </ProductStyle.ProductInfo>
                        </ProductStyle.ProdcutCard>
                    ))}
                </ProductStyle.Products>
            )}
        </>
    );
}

export default Products;