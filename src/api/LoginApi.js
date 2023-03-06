import axiosInstance from ".";

export const LoginApi = (userInfo) =>
    axiosInstance.post("/account/login/", userInfo);