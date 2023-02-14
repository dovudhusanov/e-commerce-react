import {AuthLoginTypes} from "../constants/AuthLoginType"

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthLoginTypes.LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case AuthLoginTypes.LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: true,
                error: false,
            };
        case AuthLoginTypes.LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        case AuthLoginTypes.LOGOUT:
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        default:
            return { ...state };
    }
}