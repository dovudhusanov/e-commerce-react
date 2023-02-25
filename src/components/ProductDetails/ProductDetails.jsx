import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    Location,
    Product, ProductImages,
    ProductInfo,
    ProductItem,
    ProductMain,
    ProductName,
    ProductInfoItem,
    ProductInfoCard,
    PriceAndAddSaved,
    Price,
    CounterForQuantity,
    Counter,
    DeleteProduct

} from "./ProductDetails.styles";
import SliderSwiper from "./SliderSwiper/SliderSwiper";
import {Button} from "../index";
import {USDollar} from "../../middleware/PriceFormatter";
import {addToCart, deleteProductFromCart} from "../../action/ProductAction";

function ProductDetails() {

    const {productId} = useParams()

    const products = useSelector(state => state.ProductsReducer)

    const product = products.products.filter(product => product.id == productId)

    const filterWithQuantity = useSelector(state => state.ProductReducer.filter(id => id.id == productId)) || null

    const [save, setSave] = useState(false)

    const dispatch = useDispatch()

    const [isBuy, setIsBuy] = useState(false)

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
        <>
            {product.map((productItem, index) => (
                <div key={productItem.id}>
                    <div className="container">
                        <Location>
                            <Link to="/">Home</Link> <i className="fa-solid fa-angle-right"></i> <Link
                            to={`/categories/${productItem.pathName}`}>{productItem.category} <i
                            className="fa-solid fa-angle-right"></i> </Link>{productItem.productName}
                        </Location>
                    </div>
                    <div className="container product-container">
                        <ProductMain>
                            <Product>
                                <ProductName>
                                    {productItem.productName}
                                </ProductName>
                                <ProductItem>
                                    <ProductImages>
                                        <SliderSwiper
                                            images={productItem.sliderImages}
                                            length={productItem.sliderImages.length}
                                        />
                                    </ProductImages>
                                    <ProductInfo>
                                        <ProductInfoCard>
                                            <PriceAndAddSaved save={save}>
                                                <Price>Price: <span>{USDollar.format(productItem.price)}</span></Price>
                                                <button onClick={() => {
                                                    setSave(prevState => !prevState)
                                                }}><i className="fa-sharp fa-solid fa-heart"></i> Save
                                                </button>
                                            </PriceAndAddSaved>
                                            <Counter>
                                                {filterWithQuantity[index]?.quantity >= 1 ? (
                                                    <CounterForQuantity>
                                                        <div>
                                                            <button onClick={() => {
                                                                setIsBuy(prevState => !prevState)
                                                                handleDelete(productItem)
                                                            }}><i className="fa-sharp fa-regular fa-minus"></i></button>
                                                            <span className="secondText">{filterWithQuantity[index]?.quantity}</span>
                                                            <button onClick={() => {
                                                                setIsBuy(prevState => !prevState)
                                                                handleAdd(productItem)
                                                            }}><i className="fa-sharp fa-solid fa-plus"></i></button>
                                                        </div>
                                                        <DeleteProduct onClick={() => deleteProduct(productItem.id)}><i className="fa-solid fa-trash"></i>Delete
                                                        </DeleteProduct>
                                                    </CounterForQuantity>
                                                ) : (
                                                    <Button className="add-btn" onClick={() => {
                                                        setIsBuy(prev => !prev)
                                                        handleAdd(productItem)}
                                                    }>Add to Cart</Button>
                                                )}
                                            </Counter>
                                        </ProductInfoCard>
                                        <ProductInfoCard info={true}>
                                            <ProductInfoItem>Description: <span>{productItem?.descr}</span></ProductInfoItem>
                                            <ProductInfoItem>Category: <span>{productItem?.category}</span></ProductInfoItem>
                                            {productItem?.color && <ProductInfoItem>Color: <span>{productItem?.color}</span></ProductInfoItem>}
                                            {productItem?.ProductCondition && <ProductInfoItem>Product Condition: <span>{productItem?.ProductCondition}</span></ProductInfoItem>}
                                            {productItem?.size && <ProductInfoItem>Size: <span>{productItem?.size}</span></ProductInfoItem>}
                                            {productItem?.Memory && <ProductInfoItem>Memory: <span>{productItem?.Memory}</span></ProductInfoItem>}
                                            {productItem?.RAM && <ProductInfoItem>RAM: <span>{productItem?.RAM}</span></ProductInfoItem>}
                                        </ProductInfoCard>
                                    </ProductInfo>
                                </ProductItem>
                            </Product>
                        </ProductMain>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductDetails;