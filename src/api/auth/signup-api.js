import axiosInstance from "../index";

export const SignupApi = (userInfo) =>
    axiosInstance.post("/account/signup/", userInfo);