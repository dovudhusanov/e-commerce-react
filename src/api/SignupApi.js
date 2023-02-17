import axiosInstance from ".";

export const SignupApi = (userInfo) =>
    axiosInstance.post("/auth/signup", userInfo);