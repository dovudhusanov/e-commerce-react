import {combineReducers} from "redux";
import {LoginReducer} from "./LoginReducer";
import {SignReducer} from "./SigninReducer";
import {ProductReducer} from "./ProductsReducer";

export const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
    SignupReducer: SignReducer,
    ProductReducer: ProductReducer
})