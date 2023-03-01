import React, {useEffect, useState} from 'react';
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
import {addToCart, deleteProductFromCart, uploadProduct} from "../../action/ProductAction";
import {ScrollTop} from "../../middleware/scrollTop";
import changeTitle from "../../middleware/changeTitle";
import {NotFoundPage} from "../../pages";
import {addWhishlist, deleteProductFromWhishlist, uploadWhishlist} from "../../action/WishlistAction";

function ProductDetails() {

    ScrollTop()

    const {productId, category} = useParams()

    const products = useSelector(state => state.ProductsReducer)

    const product = products.products
        .filter(productFiltered => productFiltered.pathName == category)
        .filter(product => product.id == productId)

    changeTitle(product?.map(name => name.productName))

    const filterWithQuantity = useSelector( state=> state.ProductReducer.filter((id) => id.id == productId)) || null

    const [save, setSave] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadProduct())
        dispatch(uploadWhishlist())
    }, [window.location.href])

    const [isBuy, setIsBuy] = useState(false)

    const deleteProduct = (id) => {
        dispatch(deleteProductFromCart({id}))
    }

    const handleAdd = (productItem) => {
        dispatch(addToCart(productItem))
        setIsBuy(prevState => !prevState)
    }

    const handleDelete = (productItem) => {
        dispatch(deleteProductFromCart(productItem.id))
        setIsBuy(prevState => !prevState)
    }

    const handleAddWhishlist = (productItem) => {
        dispatch(addWhishlist(productItem))
    }

    const handleRemoveWhishlist = (productItemId) => {
        dispatch(deleteProductFromWhishlist({id: productItemId.id}))
    }

    const whishlist = useSelector(state => state.WhishlistReducer.filter(whishlistFilter => whishlistFilter.id == productId))

    return (
        <>
            {product?.length === 0 ? (
                <NotFoundPage/>
            ) : (
                <>
                    {product?.map((productItem, index) => (
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
                                                    <PriceAndAddSaved whishlist={whishlist.length !== 0 && whishlist} save={save}>
                                                        <Price>Price: <span>{USDollar.format(productItem.price)}</span></Price>
                                                        {whishlist.length !== 0 ? (
                                                            <button onClick={() => handleRemoveWhishlist(productItem)}><i className="fa-sharp fa-solid fa-heart"></i> Saved
                                                            </button>
                                                        ) : (
                                                            <button onClick={() => handleAddWhishlist(productItem)}><i className="fa-sharp fa-solid fa-heart"></i> Save
                                                            </button>
                                                        )}
                                                    </PriceAndAddSaved>
                                                    <Counter>
                                                        {filterWithQuantity[index]?.quantity >= 1 ? (
                                                            <CounterForQuantity>
                                                                <div>
                                                                    <button onClick={() => handleDelete(productItem)}><i
                                                                        className="fa-sharp fa-regular fa-minus"></i>
                                                                    </button>
                                                                    <span
                                                                        className="secondText">{filterWithQuantity[index]?.quantity}</span>
                                                                    <button onClick={() => handleAdd(productItem)}><i
                                                                        className="fa-sharp fa-solid fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                                <DeleteProduct
                                                                    onClick={() => deleteProduct(productItem.id)}><i
                                                                    className="fa-solid fa-trash"></i>Delete</DeleteProduct>
                                                            </CounterForQuantity>
                                                        ) : (
                                                            <Button className="add-btn"
                                                                    onClick={() => handleAdd(productItem)}>Add to
                                                                Cart</Button>
                                                        )}
                                                    </Counter>
                                                </ProductInfoCard>
                                                <ProductInfoCard info={true}>
                                                    <ProductInfoItem>Description: <span>{productItem?.descr}</span></ProductInfoItem>
                                                    <ProductInfoItem>Category: <span>{productItem?.category}</span></ProductInfoItem>
                                                    {productItem?.color &&
                                                        <ProductInfoItem>Color: <span>{productItem?.color}</span></ProductInfoItem>}
                                                    {productItem?.ProductCondition && <ProductInfoItem>Product
                                                        Condition: <span>{productItem?.ProductCondition}</span></ProductInfoItem>}
                                                    {productItem?.size &&
                                                        <ProductInfoItem>Size: <span>{productItem?.size}</span></ProductInfoItem>}
                                                    {productItem?.Memory &&
                                                        <ProductInfoItem>Memory: <span>{productItem?.Memory}</span></ProductInfoItem>}
                                                    {productItem?.RAM &&
                                                        <ProductInfoItem>RAM: <span>{productItem?.RAM}</span></ProductInfoItem>}
                                                </ProductInfoCard>
                                            </ProductInfo>
                                        </ProductItem>
                                    </Product>
                                </ProductMain>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default ProductDetails;