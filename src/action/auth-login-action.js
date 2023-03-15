import {AuthLoginTypes} from "../constants/auth-login-type";

export const loginStart = () => ({
    type: AuthLoginTypes.LOGIN_START,
});

export const loginSuccess = (admin) => ({
    type: AuthLoginTypes.LOGIN_SUCCESS,
    payload: admin
});

export const loginFailure = () => ({
    type: AuthLoginTypes.LOGIN_FAILURE,
});

export const logout = () => ({
    type: AuthLoginTypes.LOGOUT,
});
