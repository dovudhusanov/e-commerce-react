import axiosInstance from ".";

export const LoginApi = (userInfo) =>
    axiosInstance.post("/auth/login", userInfo);