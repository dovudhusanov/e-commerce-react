// import {WhishlistType} from "../constants/WhishlistType";
//
// export const WhishlistReducer = (state = [], action) => {
//     switch (action.type){
//         // case WhishlistType.UPLOAD_WHISHLIST:
//         //     return state = JSON.parse(localStorage.getItem("whishlist")) || [];
//         // case WhishlistType.ADD_TO_WHISHLIST:
//         //     const findProduct = state?.findIndex((product) => product.id == action.payload.id)
//         //     if (findProduct >= 0) {
//         //         state[findProduct].quantity++
//         //         localStorage.setItem("whishlist", JSON.stringify([...state]))
//         //         return state
//         //     }
//         //     localStorage.setItem("whishlist", JSON.stringify([...state, action.payload]))
//         //     return [
//         //         ...state,
//         //         action.payload
//         //     ];
//         // case WhishlistType.DELETE_PRODUCT:
//         //     localStorage.setItem("whishlist", JSON.stringify(state?.filter((product) => product.id !== action.payload.id)))
//         //     return state?.filter((product) => product.id !== action.payload.id);
//         // default:
//         //     return state
//     }
// }