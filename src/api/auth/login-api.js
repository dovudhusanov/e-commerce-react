import axiosInstance from "../index";

export const LoginApi = (userInfo) =>
    axiosInstance.post("/account/login/", userInfo);