import {AuthLoginTypes} from "../constants/auth-login-type";
import {AccessTokenRefreshedApi} from "../api/auth/access-token-refreshed-api";
import {GetUserApi, LoginApi} from "../api";
import {setLoggedIn} from "../reducer/change-image-states-reducer";
import {toast} from "react-toastify";

export const loginStart = () => ({
    type: AuthLoginTypes.LOGIN_START,
});

export const loginSuccess = (user) => ({
    type: AuthLoginTypes.LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = () => ({
    type: AuthLoginTypes.LOGIN_FAILURE,
});

export const logout = () => ({
    type: AuthLoginTypes.LOGOUT,
});

const refreshTokenSuccess = (accessToken) => ({
    type: AuthLoginTypes.ACCESS_TOKEN_REFRESHED,
    payload: { access: accessToken },
});

const tokenExpired = () => ({
    type: AuthLoginTypes.ACCESS_TOKEN_EXPIRED,
});

export const LoginUser = (phoneNumber, password) => {
    return async (dispatch) => {
        dispatch(loginStart());

        try {
            const response = await LoginApi({phone: "+998" + phoneNumber, password});

            dispatch(loginSuccess(response.data.user));

            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem("userId", response.data.id)
            const userRes = await GetUserApi(localStorage.getItem("userId"))
            userRes.data.profile && localStorage.setItem("profileId", userRes.data.profile)
            // window.location.reload()
            window.location.href = '/';
            dispatch(setLoggedIn(true))
        } catch (error) {
            dispatch(loginFailure());
            toast.error("This user not found or Incorrect phone number / password", {
                autoClose: 7000
            })
        }
    };
};

export const refreshAccessToken = () => {
    return async (dispatch) => {
        try {
            const response = await AccessTokenRefreshedApi(localStorage.getItem('refresh'))

            dispatch(refreshTokenSuccess(response.data.access));

            localStorage.setItem('access', response.data.access);
        } catch (error) {
            dispatch(tokenExpired());
        }
    };
};