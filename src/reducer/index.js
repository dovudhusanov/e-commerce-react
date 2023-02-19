import {combineReducers} from "redux";
import {LoginReducer} from "./LoginReducer";
import {SignReducer} from "./SigninReducer";
import {ProductsReducer} from "./ProductsReducer";
import {ProductReducer} from "./ProductReducer";
// import {WhishlistReducer} from "./WishlistReducer";

export const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
    SignupReducer: SignReducer,
    ProductsReducer: ProductsReducer,
    ProductReducer: ProductReducer,
    // WishlistReducer: WhishlistReducer
})