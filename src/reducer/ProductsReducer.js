import {products} from "../data/data";

export const initialState = {
    products: products,
    loading: false,
    error: false
}

export const ProductsReducer = (state = initialState, action) => {
    return state
}