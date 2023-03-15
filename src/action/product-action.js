import {ProductType} from "../constants/product-type";

export const uploadProduct = () => {
    return {
        type: ProductType.UPLOAD_PRODUCT
    }
}

export const addToCart = (product) => {
    return {
        type: ProductType.ADD_TO_CART,
        payload: {...product}
    }
}

export const deleteProductFromCart = (id) => {
    return {
        type: ProductType.DELETE_PRODUCT,
        payload: id
    }
}