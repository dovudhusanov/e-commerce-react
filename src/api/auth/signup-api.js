import axiosInstance from "../axios";

export const SignupApi = (userInfo) =>
    axiosInstance.post("/account/signup/", userInfo);