import {WhishlistType} from "../constants/WhishlistType";

export const uploadWhishlist = () => {
    return {
        type: WhishlistType.UPLOAD_WHISHLIST
    }
}

export const addWhishlist = (product) => {
    return {
        type: WhishlistType.ADD_TO_WHISHLIST,
        payload: {...product}
    }
}

export const deleteProductFromWhishlist = (id) => {
    return {
        type: WhishlistType.DELETE_PRODUCT,
        payload: id
    }
}