import {SignupType} from "../constants/SignupType";

export const signStart = () => ({
    type: SignupType.SIGNUP_START,
});

export const signSuccess = (admin) => ({
    type: SignupType.SIGNUP_SUCCESS,
    payload: admin
});

export const signFailure = () => ({
    type: SignupType.SIGNUP_FAILURE,
});

export const logout = () => ({
    type: SignupType.LOGOUT,
});
