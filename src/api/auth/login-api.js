import axiosInstance from "../axios";

export const LoginApi = (userInfo) =>
    axiosInstance.post("/account/login/", userInfo);