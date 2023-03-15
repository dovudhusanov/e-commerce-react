import React, {useEffect, useState} from 'react';
import {ProductStyle} from "../../../pages/home/home.styles";
import {USDollar} from "../../../middleware/price-formatter";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, uploadProduct} from "../../../action/product-action";
import {Button} from "../../index";
import {Link} from "react-router-dom";
import {addWhishlist, deleteProductFromWhishlist, uploadWhishlist} from "../../../action/wishlist-action";

function Product({product}) {

    const dispatch = useDispatch()

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        dispatch(uploadProduct())
        dispatch(uploadWhishlist())
    }, [window.location.href])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 350px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addListener(handleMediaQueryChange);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);


    const whishlist = useSelector(state => state.WhishlistReducer.filter(whishlistFilter => whishlistFilter.id === product.id))

    function ProductSaveButton({productItem}) {

        const handleAdd = (e) => {
            e.stopPropagation()
            dispatch(addWhishlist(productItem))
        };

        const handleRemove = (e) => {
            e.stopPropagation()
            dispatch(deleteProductFromWhishlist({id: productItem.id}))
        }

        return (
            <i>{whishlist.length !== 0 ? <i className="fa-solid fa-heart" onClick={handleRemove}></i> :
                <i className="fa-light fa-heart" onClick={handleAdd}></i>}</i>
        );
    }

    function ProdcutButton({productItem}) {

        const handleAdd = (e, productItem) => {
            e.stopPropagation()
            dispatch(addToCart(productItem))
        }

        const productAdded = useSelector(state => state.ProductReducer.filter(productFilter => productFilter.id === product.id))

        return (
            <Button productAdded={productAdded} style={{fontSize: "12px"}}
                    onClick={(e) => handleAdd(e, productItem)}>{productAdded.length !== 0 ? "Added" : (isMobile ? "Add" : "Add to cart")}</Button>
        );
    }

    return (
        <ProductStyle.Product>
            <ProductStyle.ProdcutCard>
                <Link to={`/categories/${product.pathName}/${product.id}`}>
                    <img src={product.image} alt={product.productName}/>
                </Link>
                <ProductStyle.Price>{USDollar.format(product.price)}</ProductStyle.Price>
                <ProductStyle.ProductInfo>
                    <span>{product.productName} {product.descr.slice(0, 20)}</span>
                    <div>
                        <div>
                            <Link to={`/categories/${product.pathName}/${product.id}`}>
                            <i className="fa-light fa-eye"></i>
                            </Link>
                            <ProductSaveButton productItem={product} id={product.id}/>
                        </div>
                        <ProdcutButton productItem={product}/>
                    </div>
                </ProductStyle.ProductInfo>
            </ProductStyle.ProdcutCard>
        </ProductStyle.Product>
    );
}

export default Product;