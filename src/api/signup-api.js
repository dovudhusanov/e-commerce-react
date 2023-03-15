import axiosInstance from ".";

export const SignupApi = (userInfo) =>
    axiosInstance.post("/account/signup/", userInfo);