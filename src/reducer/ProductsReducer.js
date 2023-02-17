import {ProductType} from "../constants/ProductType";
import {products} from "../data/data";

export const ProductReducer = (state = products, action) => {
    switch (action.type) {
        case ProductType.UPLOAD_PRODUCT:
            return state = JSON.parse(localStorage.getItem("product")) || [];
        case ProductType.ADD_TO_CART:
            const findProduct = state?.findIndex((product) => product.id == action.payload.id)
            if (findProduct >= 0) {
                state[findProduct].quantity++
                localStorage.setItem("product", JSON.stringify([...state]))
                return state
            }
            localStorage.setItem("product", JSON.stringify([...state, action.payload]))
            return [
                ...state,
                action.payload
            ]
        case ProductType.DELETE_PRODUCT:
            const removeProductIdx = state?.findIndex((product) => product.id == action.payload)
            if (removeProductIdx >= 0) {
                if (state[removeProductIdx].quantity !== 1) {
                    state[removeProductIdx].quantity--
                }
                localStorage.setItem("product", JSON.stringify([...state]))
                return state
            }
            localStorage.setItem("product", JSON.stringify(state?.filter((product) => product.id !== action.payload.id)))
            return state?.filter((product) => product.id !== action.payload.id);
        default:
            return state
    }
}

export const totalPriceBuilder = (state) =>
    state.reduce((total, amount) => total + amount.price * amount.quantity, 0)