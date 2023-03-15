import {combineReducers} from "redux";
import {LoginReducer} from "./login-reducer";
import {SignupReducer} from "./signup-reducer"
import {ProductsReducer} from "./products-reducer";
import {ProductReducer} from "./product-reducer";
import {WhishlistReducer} from "./whishlist-reducer";
export const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
    SignupReducer: SignupReducer,
    ProductsReducer: ProductsReducer,
    ProductReducer: ProductReducer,
    WhishlistReducer: WhishlistReducer
})