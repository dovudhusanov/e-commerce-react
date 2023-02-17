import {SignupType} from "../constants/SignupType"

const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

export const SignReducer = (state = initialState, action) => {
    switch (action.type) {
        case SignupType.SIGNUP_START:
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case SignupType.SIGNUP_SUCCESS:
            return {
                user: action.payload,
                isFetching: true,
                error: false,
            };
        case SignupType.SIGNUP_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        case SignupType.LOGOUT:
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        default:
            return { ...state };
    }
}